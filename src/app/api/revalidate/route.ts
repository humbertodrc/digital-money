import {revalidateTag} from "next/cache";

export async function GET() {
  revalidateTag("user-info");

  return Response.json({revalidate: true});
}
