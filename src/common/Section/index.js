import { Wrapper, SectionContainer, SectionHeader, SectionBody } from "./styled";

const Section = ({ title, sectionBody, extraHeaderButtons }) => (
  <Wrapper>
    <SectionContainer>
      <SectionHeader>{title}</SectionHeader>
      {extraHeaderButtons}
    </SectionContainer>
    <SectionBody>{sectionBody}</SectionBody>
  </Wrapper>
);

export default Section;
