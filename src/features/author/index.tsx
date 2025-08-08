import Container from "../../common/Container";
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
          <p>
            Mam 27 lat i pochodzę z małej, ale pięknej miejscowości Świerklaniec. Jestem absolwentem AWF Katowice, gdzie ukończyłem studia licencjckie z Bezpieczeństwa Wewnętrznego i studia magisterskie z Zarządzania. Po studiach zainteresowałem się tematyką programowania i rozpocząłem kurs Frontend Developera💻, na któym to po raz pierwszy poczułem, co chciałbym robić w życiu.
          </p>
          <p>
            Moją wielką pasją jest piłka nożna⚽ - jestem aktywnym zawodnikiem lokalnej drużyny - Unia Świerklaniec🟨🟥 i wielkim fanem F.C. Barcelony🟥🟦. Przy dobrej pogodzie lubię też pojeździć na rolkach. Poza sportem, uwielbiam słuchać muzyki z gatunku <i>rocka</i> i <i>metalu</i>🎸. W wolnych chwilach lubie też trzymające w napięciu kino🎬, czy też książkę z gatunku <i>fantasy</i>📖.
          </p>
        </>
      }
    />
  </Container>
);

export default AuthorPage;