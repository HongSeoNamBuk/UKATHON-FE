"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const steps = [
  { number: 1, label: "정보 입력", href: "/CompanyInput" },
  { number: 2, label: "분석 중", href: "/Loading" },
  { number: 3, label: "결과 확인", href: "/Result" },
  { number: 4, label: "비교 리포트", href: "/Report" },
];

function getActiveStep(pathname: string) {
  const match = [...steps]
    .sort((a, b) => b.href.length - a.href.length)
    .find((step) => pathname === step.href || pathname.startsWith(`${step.href}/`));

  return match?.number ?? 1;
}

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const activeStep = getActiveStep(pathname ?? "/CompanyInput");

  return (
    <div className="flex h-full flex-1">
      <aside className="w-90 shrink-0 bg-white px-9 py-10">
        <Image src="/logo.png" alt="로고" width={121} height={30} priority />

        <p className="mt-14 text-sm font-medium text-zinc-400">진행 단계</p>
        <ol className="mt-4 flex flex-col gap-1">
          {steps.map((step) => {
            const isActive = step.number === activeStep;
            const isCompleted = step.number < activeStep;

            return (
              <li
                key={step.number}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 ${
                  isActive ? "bg-blue-50" : ""
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                    isCompleted
                      ? "bg-zinc-900 text-white"
                      : isActive
                        ? "bg-blue-900 text-white"
                        : "bg-zinc-200 text-zinc-500"
                  }`}
                >
                  {isCompleted ? (
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.5 8.5L6.5 11.5L12.5 4.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    step.number
                  )}
                </span>
                <span
                  className={`text-base font-semibold ${
                    isCompleted ? "text-zinc-900" : isActive ? "text-blue-900" : "text-zinc-400"
                  }`}
                >
                  {step.label}
                </span>
              </li>
            );
          })}
        </ol>
      </aside>

      <main className="scrollbar-hidden flex flex-1 items-center-safe justify-center-safe overflow-y-auto bg-[#F3F4F6]">
        {children}
      </main>
    </div>
  );
}
