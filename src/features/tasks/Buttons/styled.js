import styled from "styled-components";

export const ButtonsForAllTasks = styled.div`
  display: flex;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const DoneTasksHidden = styled.button`
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

export const AllTasksDone = styled(DoneTasksHidden)`
  &:disabled {
    color: ${({ theme }) => theme.colors.silver};
    transition: none;
  }
`;
