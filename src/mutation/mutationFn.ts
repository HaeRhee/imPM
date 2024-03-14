import { TTodo } from "@/types/type";

export const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
export const getJson = async () => {
  const response = await fetch(`${serverUrl}/todos`);
  const todos = await response.json();

  return todos;
};

export const postJson = async (newTodo: TTodo) => {
  const response = await fetch(`${serverUrl}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  const todo = await response.json();

  return todo;
};

export const deleteJson = async (deleteTodo: Pick<TTodo, "id">) => {
  const { id } = deleteTodo;
  await fetch(`${serverUrl}/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const changeJson = async (changeTodo: Pick<TTodo, "id" | "isDone">) => {
  const { id, isDone } = changeTodo;
  await fetch(`${serverUrl}/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isDone }),
  });
};
