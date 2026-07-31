export type ConfidenceLevel = "High" | "Medium" | "Low";

const LEVEL_STYLES: Record<ConfidenceLevel, { bg: string; text: string }> = {
  High: { bg: "bg-[#DFFFF1]", text: "text-[#008972]" },
  Medium: { bg: "bg-[#F8FFDF]", text: "text-[#895E00]" },
  Low: { bg: "bg-[#FFDFDF]", text: "text-[#890000]" },
};

function normalizeLevel(level: string): ConfidenceLevel | null {
  const key = Object.keys(LEVEL_STYLES).find(
    (candidate) => candidate.toLowerCase() === level.toLowerCase()
  );

  return (key as ConfidenceLevel | undefined) ?? null;
}

type LevelChipProps = {
  level: ConfidenceLevel | string;
};

export default function LevelChip({ level }: LevelChipProps) {
  const normalized = normalizeLevel(level);
  const { bg, text } = normalized
    ? LEVEL_STYLES[normalized]
    : { bg: "bg-zinc-100", text: "text-zinc-500" };

  return (
    <div className={`inline-flex items-center gap-2.5 rounded-full px-4 py-1 ${bg}`}>
      <span className="text-title-18 text-99">신뢰도</span>
      <span className={`text-headline-emphasis-24 ${text}`}>{normalized ?? level}</span>
    </div>
  );
}
