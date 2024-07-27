
"use client";


import initializeGA from "@/lib/GoogleAnalytic";
import { useEffect } from "react";


export default function GoogleAnalyticss() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initializeGA();
      window.GA_INITIALIZED = true;
    }
  }, []);
}