import { NavigationContainer, NavigationList, StyledNavLink } from "./styled";

export const Navigation = () => (
  <NavigationContainer>
    <NavigationList>
      <li>
        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/autor">O autorze</StyledNavLink>
      </li>
    </NavigationList>
  </NavigationContainer>
);
