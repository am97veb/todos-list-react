import { SectionContainer, SectionHeader } from "./styled";

const Section = ({ title, sectionBody, extraHeaderButtons }) => (

  <section>
    <SectionContainer>
      <SectionHeader>
        {title}
      </SectionHeader>
      {extraHeaderButtons}
    </SectionContainer>
    {sectionBody}
  </section>
);

export default Section;