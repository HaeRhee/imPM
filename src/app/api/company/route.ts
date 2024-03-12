export async function GET(request: Request) {
  const response = await fetch("http://localhost:3000/companyInfo");
  const companyInfo = await response.json();

  if (!companyInfo) {
    return new Response("Todo is not found", {
      status: 404,
    });
  }

  return Response.json({
    companyInfo: [
      ...companyInfo,
      {
        test: "test",
      },
    ],
  });
}

export async function POST(request: Request) {
  // body에서 값을 뽑아오기
  const { name, desctiption, image } = await request.json();

  const response = await fetch("http://localhost:3000/companyInfo", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ name, desctiption, image }),
  });

  const companyInfo = await response.json();

  return Response.json({
    companyInfo,
  });
}
