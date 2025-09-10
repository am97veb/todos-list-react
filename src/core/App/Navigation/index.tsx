import { toAuthor, toTasks } from "../../routes";
import { NavigationContainer, NavigationList, StyledNavLink } from "./styled";

const Navigation = () => (
  <NavigationContainer>
    <NavigationList>
      <li>
        <StyledNavLink to={toTasks}>Zadania</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={toAuthor}>O autorze</StyledNavLink>
      </li>
    </NavigationList>
  </NavigationContainer>
);

export default Navigation;