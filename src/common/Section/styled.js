import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 10px 0px;
  background-color: ${({ theme }) => theme.colors.white};  
  box-shadow: 0px 1px 5px -2px ${({ theme }) => theme.colors.gray};
`;

export const SectionHeader = styled.h2`
  padding: 20px;
  margin: 0px;
`;

export const SectionBody = styled.div`
  padding: 20px;
`;

export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  border-bottom: solid 2px ${({ theme }) => theme.colors.alto};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;
