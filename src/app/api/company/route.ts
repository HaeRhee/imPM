import { serverUrl } from "@/mutation/mutationFn";

export async function GET(request: Request) {
  try {
    const response = await fetch(`${serverUrl}/company`);
    const { companyInfo } = await response.json();

    if (!companyInfo) {
      return new Response("Todo is not found", {
        status: 404,
      });
    }

    return Response.json({
      companyInfo,
    });
  } catch (error) {
    throw new Error("정보를 가져오지 못 하고 있습니다.");
  }
}
