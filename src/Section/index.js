import "./style.css";

const Section = ({ title, sectionBody, extraHeaderButtons }) => (

  <section className="section">
      <div className="section__container">
          <h2 className="section__header">{title}</h2>
          {extraHeaderButtons}
      </div>
      {sectionBody}
  </section>

);

export default Section;