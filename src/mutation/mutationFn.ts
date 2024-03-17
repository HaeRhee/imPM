import { TTodo } from "@/types/type";

export const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
export const getJson = async () => {
  const response = await fetch(`http://localhost:3000/api/todos`);
  const { todos } = await response.json();

  return todos;
};

export const postJson = async (newTodo: TTodo) => {
  await fetch(`http://localhost:3000/api/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
};

export const deleteJson = async (deleteTodo: Pick<TTodo, "id">) => {
  const { id } = deleteTodo;
  await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const changeJson = async (changeTodo: Pick<TTodo, "id" | "isDone">) => {
  const { id, isDone } = changeTodo;
  await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isDone }),
  });
};
