"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import LevelChip from "@/components/LevelChip";
import { Button } from "@/components/Button";
import Modal from "@/components/Modal";

type ValueCheckResult = {
  confidenceLevel: string;
  enterpriseValue: number;
  evSalesValue: number;
  evEbitValue: number;
};

function formatKoreanCurrency(amount: number): string {
  const eok = Math.floor(amount / 100_000_000);
  const man = Math.floor((amount % 100_000_000) / 10_000);

  const parts: string[] = [];
  if (eok > 0) parts.push(`${eok}억`);
  if (man > 0) parts.push(`${man.toLocaleString()}만`);
  if (parts.length === 0) parts.push("0");

  return `${parts.join(" ")} 원`;
}

export default function Result() {
  const router = useRouter();
  const [showCompareModal, setShowCompareModal] = useState(false);

  const [result] = useState<ValueCheckResult>({
    confidenceLevel: "High",
    enterpriseValue: 2_137_500_000,
    evSalesValue: 2_100_000_000,
    evEbitValue: 2_175_000_000,
  });

  return (
    <div className="w-full self-start px-20 py-15">
      <Header title="결과" subtitle="Value Check 기업가치" />

      <div className="mt-8 flex flex-col gap-4">
            <div className="rounded-2xl bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] px-7.5 py-3.75">
                <LevelChip level={result.confidenceLevel} />
            </div>

            <div className="flex flex-col items-center gap-3 rounded-2xl bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] pt-16 pb-20">
                <p className="text-title-20 text-70">예상 기업가치</p>
                <p className="text-display-emphasis-64 text-99">
                    {formatKoreanCurrency(result.enterpriseValue)}
                </p>
            </div>

            <div className="flex gap-4">
                <div className="flex-1 rounded-2xl bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] px-8 pt-10 pb-13.75">
                    <p className="text-title-18 text-70">EV/Sales 배수 기반 가치</p>
                    <p className="mt-3 text-display-32 text-99">
                    {formatKoreanCurrency(result.evSalesValue)}
                    </p>
                </div>

                <div className="flex-1 rounded-2xl bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] px-8 pt-10 pb-13.75">
                    <p className="text-title-18 text-70">EV/영업이익 배수 기반 가치</p>
                    <p className="mt-3 text-display-32 text-99">
                    {formatKoreanCurrency(result.evEbitValue)}
                    </p>
                </div>
            </div>

            <p className="text-caption-12 text-70 ml-2">
                본 결과는 참고용 추정치입니다. 제공된 재무 데이터와 제한된 비교기업 정보를 바탕으로 산출된
                값으로, 실제 기업가치와 차이가 있을 수 있습니다.
                <br />
                투자 의사결정 시에는 추가적인 실사(Due Diligence) 및 전문가 자문을 반드시 병행하시기
                바랍니다.
            </p>

            <div className="flex gap-2.5 mt-2">
                <Button variant="secondary" className="flex-1">
                    저장하기
                </Button>
                <Button className="flex-2" onClick={() => setShowCompareModal(true)}>
                    동종 기업들과 비교하기
                </Button>
            </div>
      </div>

      {showCompareModal && (
        <Modal
          title="추가 2,900원으로 확인해보세요"
          description="기업가치에 영향을 준 동종 기업의 정보를 볼 수 있어요"
          dismissLabel="괜찮아요"
          confirmLabel="결제하기"
          onDismiss={() => setShowCompareModal(false)}
          onConfirm={() => {
            // TODO: 결제 로직 연동
            setShowCompareModal(false);
            router.push("/Report");
          }}
        />
      )}
    </div>
  );
}
