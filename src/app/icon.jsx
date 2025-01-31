import { ImageResponse } from "next/og";
import icon from "@/assets/icon.png";
// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <img
        src={"https://admin.boezangapple.com/assets/icon-BfWiqzZ9.png"}
        alt="Icon"
        sizes="32x32"
        width={size.width}
        height={size.height}
      />
    ),
    {
      ...size,
    }
  );
}
