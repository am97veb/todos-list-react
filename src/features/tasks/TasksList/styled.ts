import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  padding: 0px;
  margin: 0px;
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  align-items: center;
  justify-items: center;
  list-style: none;
  border-bottom: solid 1px;
  border-color: ${({ theme }) => theme.colors.alto};

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    grid-template-columns: 30px 1fr 30px;
    grid-gap: 10px;
  }
`;

export const ListButton = styled.button<{
  $remove?: boolean;
}>`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.harlequin};
  transition: 0.5s;
  border: none;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.heppyHarlequin};
  }

  &:active {
    border: solid 2px;
    border-color: ${({ theme }) => theme.colors.black};
  }

  ${({ $remove }) =>
    $remove &&
    css`
      color: rgb(240, 239, 239);
      background-color: ${({ theme }) => theme.colors.torchRed};

      &:hover {
        background-color: ${({ theme }) => theme.colors.sunsetOrange};
      }
    `}
`;

export const Content = styled.p<{
  $done?: boolean;
}>`
  display: grid;
  justify-self: start;

  ${({ $done }) =>
    $done &&
    css`
      text-decoration: line-through;
    `}
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.surfieGreen};
  text-decoration: none;
`;
