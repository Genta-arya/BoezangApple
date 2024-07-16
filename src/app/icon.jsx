import { ImageResponse } from "next/og";

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
  const image =
    "https://boezang-apple-development.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon.e16eee5c.png&w=256&q=75";
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <img
        src={image}
        alt="Icon"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
