import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "logo.png"));
  const logoSrc = Uint8Array.from(logoData).buffer;

  /* eslint @next/next/no-img-element: "off", jsx-a11y/alt-text: "off" */
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          backgroundColor: "#f4f2f1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={logoSrc as unknown as string} height="100%" />
      </div>
    ),
  );
}
