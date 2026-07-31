"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/Result");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      role="status"
      aria-label="분석 중"
      className="h-17.5 w-17.5 animate-spin rounded-full border-4 border-fill border-t-main"
    />
  );
}