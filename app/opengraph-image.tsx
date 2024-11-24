import { ImageResponse } from "next/og";

export const runtime = "edge";

export default async function OpenGraphImage(): Promise<ImageResponse> {
  const logoSrc = await fetch(new URL("./logo.png", import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={logoSrc as any} height="100" />
      </div>
    ),
  );
}
