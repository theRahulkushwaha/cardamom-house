import { Suspense } from "react";
import { MenuExperience } from "@/components/MenuExperience";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <MenuExperience />
    </Suspense>
  );
}
