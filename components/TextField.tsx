import { useId } from "react";
import { cn } from "@/lib/cn";

type TextFieldProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label: string;
  wrapperClassName?: string;
  ref?: React.Ref<HTMLInputElement>;
};

export function TextField({
  label,
  wrapperClassName,
  className,
  id,
  ref,
  ...props
}: TextFieldProps) {
  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <div className={cn("flex w-full flex-col items-start gap-1.5", wrapperClassName)}>
      <label htmlFor={inputId} className="text-title-18 text-99">
        {label}
      </label>

      <input
        ref={ref}
        id={inputId}
        className={cn(
          "w-full rounded-xl border border-50 bg-bg-surface px-5 py-3.5 text-body-17 not-placeholder-shown:border-90 focus:border-90 focus:placeholder-transparent focus:outline-none",
          className
        )}
        {...props}
      />
    </div>
  );
}