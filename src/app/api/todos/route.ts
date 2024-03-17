import { serverUrl } from "@/mutation/mutationFn";

// server
export async function GET(request: Request) {
  try {
    const response = await fetch(`${serverUrl}/todos`);
    const todos = await response.json();
    console.log("todos=>", todos);

    if (!todos) {
      return new Response("todo를 찾을 수 없습니다.", {
        status: 404,
      });
    }

    return Response.json({ todos });
  } catch (error) {
    throw new Error("정보를 가져오지 못하고 있습니다..");
  }
}

// 추가
export async function POST(request: Request) {
  try {
    const newTodo = await request.json();

    if (!newTodo) {
      return new Response(
        JSON.stringify({ error: "제목과 내용을 입력해주세요." })
      );
    }
    const response = await fetch(`${serverUrl}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newTodo, isDone: false }),
    });
    const todos = await response.json();

    return Response.json({ todos });
  } catch (error) {
    throw new Error("요청이 거절되었습니다.");
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, isDone } = await request.json();
    console.log(id, isDone);
    const response = await fetch(`${serverUrl}/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ isDone }),
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify({ isDone }),
      },
    });
    const updateTodo = await response.json();

    return new Response(null, { status: 204 });
  } catch (error) {
    throw new Error("수정이 안 되었습니다.");
  }
}
