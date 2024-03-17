import { serverUrl } from "@/mutation/mutationFn";

//수정
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const { isDone } = await request.json();
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

// 삭제
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  console.log("id", id);
  await fetch(`${serverUrl}/todos/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  return new Response(null, { status: 204 });
}
