import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ExtraHeaderButtons = styled.button`
  color: ${({ theme }) => theme.colors.persianGreen};
  transition: 0.5s;
  border: none;
  background-color: transparent;
  margin-left: 20px;

  &:hover {
    color: ${({ theme }) => theme.colors.robinsEggBlue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-basis: 100%;
    margin: 10px;
  }
`;

export const ExtraHeaderButtonsDisabled = styled(ExtraHeaderButtons)`
  &:disabled {
    color: ${({ theme }) => theme.colors.silver};
    transition: none;
  }
`;