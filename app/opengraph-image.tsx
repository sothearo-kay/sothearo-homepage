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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={logoSrc as unknown as string}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    ),
  );
}
