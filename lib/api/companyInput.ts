export type SaveCompanyInputPayload = {
  industry: string;
  companyName: string;
  experience: number;
  revenue: number;
  operatingMargin: number;
};

// TODO: 실제 "저장하기" API 엔드포인트 연동. 지금은 백엔드가 없어서 목으로 처리.
export async function saveCompanyInput(payload: SaveCompanyInputPayload): Promise<void> {
  console.log("saveCompanyInput", payload);
}
