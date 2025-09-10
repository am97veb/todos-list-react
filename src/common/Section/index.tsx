import { Wrapper, SectionContainer, SectionHeader, SectionBody } from "./styled";
import SectionProps from "./types";

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