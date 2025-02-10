import { Container } from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => (
  <Container>
    <Header
      title="O autorze"
    />
    <Section
      title="Adrian Markefka"
      sectionBody={
        <>
          Nazywam się Adrian Markefka i mam 26 lat. Pochodzę ze Świerklańca, a obecnie mieszkam w Piekarach Śląskich (woj. Śląskie). Jestem absolwentem AWF Katowice, gdzie ukończyłem studia licencjckie z Bezpieczeństwa Wewnętrznego i studia magisterskie z Zarządzania. Obecnie pracuję na stanowisku protokolanta sądowego w Sądzie Apelacyjnym w Katowicach. W ostatnim czasie zainteresowałem się tematyką programowania, a po darmowym Livie YouCode zdecydowałem się rozpocząć do kursu Frontend Developera.
        </>
      }
    />
  </Container>
);

export default AuthorPage;