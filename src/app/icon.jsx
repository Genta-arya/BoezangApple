import { ImageResponse } from "next/og";

import Image from "next/image";

export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <Image
        src={"https://admin.boezangapple.com/assets/icon-BfWiqzZ9.png"}
        alt="Icon"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    ),
    {
      ...size,
    }
  );
}
