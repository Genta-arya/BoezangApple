"use client";
import { useEffect } from "react";
import UAParser from "ua-parser-js";
import { io } from "socket.io-client";
import { usePathname } from "next/navigation";
import axios from "axios";

const TrackingAnalytic = () => {
  const pathname = usePathname();

  useEffect(() => {
    const socket = io(
      process.env.NEXT_PUBLIC_NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_IO_local
        : process.env.NEXT_PUBLIC_IO
    );

    // Fungsi untuk mencatat kunjungan
    const logVisit = async () => {
      try {
        const ipResponse = await axios.get("http://ip-api.com/json");
        const ip = ipResponse.data.query;

        const parser = new UAParser();
        const deviceInfo = parser.getResult();

        // Kirim data setelah 10 detik
        setTimeout(() => {
          socket.emit("log-visit", { ip, page: pathname, device: deviceInfo });
        }, 5000); // 10 detik
      } catch (error) {
        console.error("Error logging visit:", error);
      }
    };

    // Panggil fungsi untuk mencatat kunjungan
    logVisit();

    // Mendengarkan event dari Socket.IO
    socket.on("new-visit", (data) => {
      console.log("New visit:", data);
    });

    // Cleanup saat komponen unmount
    return () => {
      socket.disconnect(); 
    };
  }, [pathname]); 

  return null; 
};

export default TrackingAnalytic;
