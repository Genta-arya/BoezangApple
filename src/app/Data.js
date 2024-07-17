import { Highlight } from "@/components/CardStack";

export const CARDS = [
  {
    id: 0,
    name: "Yogi",
    designation: "Founder & CEO",
    content: (
      <p>
        “Kualitas iPhone kami adalah yang terbaik di kelasnya, <Highlight>kami berkomitmen untuk memberikan pengalaman terbaik</Highlight> bagi setiap pelanggan.”
      </p>
    ),
  },
  {
    id: 1,
    name: "Yogi",
    designation: "Chief Technology Officer",
    content: (
      <p>
        “Inovasi dan teknologi terbaru <Highlight>adalah kunci dalam setiap produk kami</Highlight>. Kami selalu berusaha untuk menghadirkan solusi terbaik.”
      </p>
    ),
  },
  {
    id: 2,
    name: "Yogi",
    designation: "Marketing Manager",
    content: (
      <p>
        “Kepercayaan pelanggan adalah <Highlight>prioritas utama kami</Highlight>. Dengan layanan pelanggan yang ramah dan produk berkualitas, kami berusaha untuk memenuhi semua kebutuhan Anda.”
      </p>
    ),
  },
];
