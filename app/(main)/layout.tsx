"use client";

import { usePathname } from "next/navigation";

const steps = [
  { number: 1, label: "정보 입력", href: "/main" },
  { number: 2, label: "분석 중", href: "/main/analysis" },
  { number: 3, label: "결과 확인", href: "/main/result" },
  { number: 4, label: "비교 리포트", href: "/main/report" },
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
  const activeStep = getActiveStep(pathname ?? "/main");

  return (
    <div className="flex min-h-full flex-1">
      <aside className="w-90 shrink-0 bg-white px-9 py-10">
        <div className="text-lg font-bold text-zinc-900">로고</div>

        <p className="mt-14 text-sm font-medium text-zinc-400">진행 단계</p>
        <ol className="mt-4 flex flex-col gap-1">
          {steps.map((step) => {
            const isActive = step.number === activeStep;

            return (
              <li
                key={step.number}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 ${
                  isActive ? "bg-blue-50" : ""
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                    isActive ? "bg-blue-900 text-white" : "bg-zinc-200 text-zinc-500"
                  }`}
                >
                  {step.number}
                </span>
                <span
                  className={`text-base font-semibold ${
                    isActive ? "text-blue-900" : "text-zinc-400"
                  }`}
                >
                  {step.label}
                </span>
              </li>
            );
          })}
        </ol>
      </aside>

      <main className="scrollbar-hidden flex flex-1 items-center justify-center overflow-y-auto bg-[#F3F4F6] px-20 py-16">
        {children}
      </main>
    </div>
  );
}
