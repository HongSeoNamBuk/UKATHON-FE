import { useState } from "react";
import Bar1 from "@/components/Bar1";
import { TextField } from "@/components/TextField";
import { Button } from "@/components/Button";

export type Step2SubmitPayload = {
  industry: string;
  companyName: string;
  experience: number;
  revenue: number;
  operatingMargin: number;
};

type Step2Props = {
  industry: string;
  companyName: string;
  experience: number;
  onPrev: () => void;
  onSubmit: (payload: Step2SubmitPayload) => void;
};

export function Step2({
  industry,
  companyName,
  experience,
  onPrev,
  onSubmit,
}: Step2Props) {
  const [revenue, setRevenue] = useState("");
  const [operatingMargin, setOperatingMargin] = useState("");

  const isComplete = revenue.trim() !== "" && operatingMargin.trim() !== "";

  return (
    <div className="flex h-200 w-162.5 flex-col">
      <div className="mt-20 flex flex-row gap-2.5 items-center">
        <Bar1 />
        <Bar1 />
      </div>

      <div className="mt-8">
        <h1 className="text-headline-emphasis-36 text-99">마지막이에요!</h1>
        <h2 className="text-title-18 text-70">가장 최근 년도의 손익계산서와 재무 정보를 입력해주세요</h2>
      </div>

      <TextField
        label="연 매출액"
        placeholder="예시: 50,000,000"
        value={revenue}
        onChange={(e) => setRevenue(e.target.value)}
        wrapperClassName="mt-[66px]"
      />

      <TextField
        label="연 영업이익률"
        placeholder="예시: 50,000,000"
        value={operatingMargin}
        onChange={(e) => setOperatingMargin(e.target.value)}
        wrapperClassName="mt-[70px]"
      />

      <div className="mt-52 flex gap-2.5">
        <Button variant="secondary" className="flex-1" onClick={onPrev}>
          이전
        </Button>

        <Button
          className="flex-3"
          disabled={!isComplete}
          onClick={() =>
            onSubmit({
              industry,
              companyName,
              experience,
              revenue: Number(revenue),
              operatingMargin: Number(operatingMargin),
            })
          }
        >
          다음
        </Button>
      </div>
    </div>
  );
}
