// server
export async function GET(request: Request) {
  const response = await fetch("http://localhost:4000/todos");
  const todos = await response.json();
  console.log("todos=>", todos);

  if (!todos) {
    return new Response("todo를 찾을 수 없습니다.", {
      status: 404,
    });
  }

  return Response.json({
    todos: [...todos],
  });
}
