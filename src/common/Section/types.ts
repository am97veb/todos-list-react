import { ReactNode } from "react";

interface SectionProps {
  title: ReactNode;
  sectionBody: ReactNode;
  extraHeaderButtons?: ReactNode;
}

export default SectionProps;