import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  const remotePath = pathname.replace(/^\/api\/proxy\//, "");
  const url = `https://mangadex.org/${remotePath}`;

  const response = await fetch(url);

  if (!response.ok) {
    return new NextResponse(null, { status: response.status });
  }

  const buffer = await response.arrayBuffer();

  return new NextResponse(buffer, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type":
        response.headers.get("content-type") ?? "application/octet-stream",
    },
  });
}
