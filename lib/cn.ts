import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge, validators } from "tailwind-merge";

// app/globals.css에 정의된 커스텀 타이포그래피 카테고리(예: text-display-20, text-caption-12).
// "이름-숫자" 형태라 tailwind-merge가 text-color(예: text-blue-500)로 오인해
// 같이 쓰인 다른 text-색상 클래스와 충돌시켜 지워버리는 걸 막기 위해,
// text-color 매칭에서 이 이름들은 색상이 아니라고 명시적으로 제외한다.
const FONT_SIZE_PREFIXES = [
  "display-emphasis",
  "display",
  "headline-emphasis",
  "headline",
  "title-emphasis",
  "title",
  "body-emphasis",
  "body",
  "label-emphasis",
  "label",
  "caption",
];

function isCustomFontSize(value: string) {
  return FONT_SIZE_PREFIXES.some((prefix) => new RegExp(`^${prefix}-\\d+(\\.\\d+)?$`).test(value));
}

const twMerge = extendTailwindMerge({
  override: {
    classGroups: {
      // 이 프로젝트는 border-2/border-4 같은 숫자 border-width 유틸을 쓰지 않고
      // border-50/border-90처럼 숫자를 색상 토큰으로 쓰기 때문에,
      // border-<number>를 border-width로 오인해 기본 border 클래스를 지우는 걸 막는다.
      "border-w": [{ border: [""] }],
      "text-color": [
        {
          text: [
            (value: string) => !isCustomFontSize(value),
            validators.isArbitraryVariable,
            validators.isArbitraryValue,
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
