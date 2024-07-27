import { ImageResponse } from "next/og";
import icon from "@/assets/icon.png"
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
        src={"https://api.hkks.shop/uploads/image-(1)-1721129887319.png"}
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
