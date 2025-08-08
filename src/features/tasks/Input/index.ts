import styled from "styled-components";

export const Input = styled.input`
  padding: 10px;
  border: solid 1px;
  border-color: ${({ theme }) => theme.colors.alto};
  min-width: 50px;
`;
