// import { TTodo } from "@/types/type";

// export const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

// export const getJson = async () => {
//   try {
//     const response = await fetch(`${serverUrl}/todos`);
//     const todos = await response.json();
//     return todos;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const postJson = async (newTodo: TTodo): Promise<void> => {
//   const response = await fetch(`${serverUrl}/todos`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newTodo),
//   });
//   const todo = await response.json();

//   return todo;
// };

// export const deleteJson = async (id: string) => {
//   await fetch(`${serverUrl}/todos/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// };

// export const changeJson = async (changeTodo: Pick<TTodo, "id" | "isDone">) => {
//   const { id, isDone } = changeTodo;
//   await fetch(`${serverUrl}/todos/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ isDone }),
//   });
// };
