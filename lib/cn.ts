import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  override: {
    classGroups: {
      // 이 프로젝트는 border-2/border-4 같은 숫자 border-width 유틸을 쓰지 않고
      // border-50/border-90처럼 숫자를 색상 토큰으로 쓰기 때문에,
      // border-<number>를 border-width로 오인해 기본 border 클래스를 지우는 걸 막는다.
      "border-w": [{ border: [""] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
