"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/Button";

type PeerCompany = {
  name: string;
  revenue: string;
  operatingMargin: string;
  enterpriseValue: string;
  highlight?: boolean;
};

export default function Report() {
  const [peers] = useState<PeerCompany[]>([
    { name: "AAA", revenue: "820억", operatingMargin: "13%", enterpriseValue: "574억 원" },
    { name: "BROU", revenue: "1,450억", operatingMargin: "16%", enterpriseValue: "1,160억 원" },
    { name: "CDP", revenue: "620억", operatingMargin: "11%", enterpriseValue: "403억 원" },
    {
      name: "Value Check",
      revenue: "30억",
      operatingMargin: "14%",
      enterpriseValue: "21억 3,750만 원",
      highlight: true,
    },
  ]);

  return (
    <div className="w-full self-start px-22.5 py-15">
      <Header
        title="비교 리포트"
        subtitle="Value Check의 동종 기업 비교"
        description="기업가치 도출에 영향을 준 동종업계 기업들이에요"
      />

      <div className="mt-28 rounded-2xl bg-white px-8 py-6 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]">
        <div className="grid grid-cols-4 gap-4 px-4 pb-4">
          <p className="text-center text-label-emphasis-16 text-main">기업명</p>
          <p className="text-center text-label-16 text-main">매출액</p>
          <p className="text-center text-label-16 text-main">영업이익률</p>
          <p className="text-center text-label-emphasis-16 text-main">예상 기업가치</p>
        </div>

        <div className="flex flex-col gap-1">
          {peers.map((peer) => (
            <div
              key={peer.name}
              className={`grid grid-cols-4 items-center gap-4 px-4 py-4 ${
                peer.highlight ? "bg-[#E9F7FF]" : "border-t border-zinc-100"
              }`}
            >
              <p className="text-center text-title-emphasis-20 text-99">{peer.name}</p>
              <p className="text-center text-label-16 text-70">{peer.revenue}</p>
              <p className="text-center text-label-16 text-70">{peer.operatingMargin}</p>
              <p className="text-center text-title-emphasis-20 text-99">
                {peer.enterpriseValue}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-7 ml-2 text-caption-12 text-70">
        DART 기반 추정 가치이며, 실제 수치와 다를 수 있습니다.
      </p>

      <Button className="mt-15 w-full">저장하기</Button>
    </div>
  );
}
