import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.persianGreen};
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 20px;

  &.active {
    font-weight: 600;
  }
`;
