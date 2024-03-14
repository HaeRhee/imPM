import { serverUrl } from "@/mutation/mutationFn";

export async function GET(request: Request) {
  const response = await fetch(`${serverUrl}/companyInfo`);
  const companyInfo = await response.json();
  console.log(companyInfo);
  if (!companyInfo) {
    return new Response("Todo is not found", {
      status: 404,
    });
  }

  return Response.json({
    companyInfo,
  });
}
