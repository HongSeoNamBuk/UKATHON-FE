import { cn } from "@/lib/cn";

type FieldChipProps = {
  label: string;
  selected?: boolean;
  onClick?: () => void;
};

export default function FieldChip({ label, selected, onClick }: FieldChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center px-5 py-3.5 rounded-xl bg-white text-title-18",
        selected && "bg-sub text-99 text-title-18"
      )}
    >
      {label}
    </button>
  );
}
