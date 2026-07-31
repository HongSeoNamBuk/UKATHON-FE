import { useState } from "react";
import Bar1 from "@/components/Bar1";
import Bar2 from "@/components/Bar2";
import { TextField } from "@/components/TextField";
import FieldChip from "@/components/Chip";
import { Button } from "@/components/Button";

export type Step1SubmitPayload = {
  industry: string;
  companyName: string;
  experience: number;
};

type Step1Props = {
  industry?: string;
  onNext: (payload: Step1SubmitPayload) => void;
};

const INDUSTRY_OPTIONS = [
  "소프트웨어 개발 및 공급업",
  "컴퓨터 프로그래밍, 시스템 통합 및 관리업",
  "자료 처리, 호스팅, 포털 및 기타 인터넷 정보 매개 서비스업",
  "기타 정보 서비스업",
];

export function Step1({ industry, onNext }: Step1Props) {
  const [selectedIndustry, setSelectedIndustry] = useState(industry);
  const [companyName, setCompanyName] = useState("");
  const [experience, setExperience] = useState("");

  const isComplete = !!selectedIndustry && companyName.trim() !== "" && experience.trim() !== "";

  return (
    <div className="flex h-200 w-162.5 flex-col">
      <div className="mt-20 flex flex-row gap-2.5 items-center">
        <Bar1 />
        <Bar2 />
      </div>

      <h1 className="mt-8 text-headline-emphasis-36">회사 정보를 알려주세요</h1>

      <TextField
        label="회사명"
        placeholder="회사명 입력"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        wrapperClassName="mt-[46px]"
      />

      <div className="mt-12.5 flex flex-col gap-1.5">
        <p className="text-title-18">업종</p>

        <div className="flex flex-wrap gap-3">
          {INDUSTRY_OPTIONS.map((option) => (
            <FieldChip
              key={option}
              label={option}
              selected={selectedIndustry === option}
              onClick={() =>
                setSelectedIndustry((prev) => (prev === option ? undefined : option))
              }
            />
          ))}
        </div>
      </div>

      <TextField
        label="업력(년)"
        placeholder="예시: 5"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        wrapperClassName="mt-[63px]"
      />

      <Button
        className="mt-15.5"
        disabled={!isComplete}
        onClick={() =>
          onNext({
            industry: selectedIndustry!,
            companyName,
            experience: Number(experience),
          })
        }
      >
        다음
      </Button>
    </div>
  );
}
