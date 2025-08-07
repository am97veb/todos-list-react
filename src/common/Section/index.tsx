import { ReactNode } from "react";
import { Wrapper, SectionContainer, SectionHeader, SectionBody } from "./styled";

interface SectionProps {
  title: ReactNode;
  sectionBody: ReactNode;
  extraHeaderButtons?: ReactNode;
}

const Section = ({ title, sectionBody, extraHeaderButtons }: SectionProps) => (
  <Wrapper>
    <SectionContainer>
      <SectionHeader>{title}</SectionHeader>
      {extraHeaderButtons}
    </SectionContainer>
    <SectionBody>{sectionBody}</SectionBody>
  </Wrapper>
);

export default Section;
