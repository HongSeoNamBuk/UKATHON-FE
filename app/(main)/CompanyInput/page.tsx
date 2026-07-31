"use client";

import { useRouter } from "next/navigation";
import { useFunnel } from "@use-funnel/browser";
import { saveCompanyInput } from "@/lib/api/companyInput";
import { Step1 } from "./_components/Step1";
import { Step2 } from "./_components/Step2";

type CompanyInputFunnel = {
  Step1: { industry?: string };
  Step2: { industry: string; companyName: string; experience: number };
};

export default function CompanyInputPage() {
  const router = useRouter();
  const funnel = useFunnel<CompanyInputFunnel>({
    id: "company-input",
    initial: {
      step: "Step1",
      context: {},
    },
  });

  return (
    <funnel.Render
      Step1={({ context, history }) => (
        <Step1
          industry={context.industry}
          onNext={(payload) => history.push("Step2", payload)}
        />
      )}
      Step2={({ context, history }) => (
        <Step2
          industry={context.industry}
          companyName={context.companyName}
          experience={context.experience}
          onPrev={() => history.back()}
          onSubmit={async (payload) => {
            await saveCompanyInput(payload);
            router.push("/Loading");
          }}
        />
      )}
    />
  );
}
