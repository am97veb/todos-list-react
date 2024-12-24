import styled from "styled-components";
// import { Theme } from "Theme";

export const ButtonsForAllTasks = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
        padding: 10px 0;
    }
`;

export const DoneTasksHidden = styled.button`
    color: ${({ theme }) => theme.colors.persianGreen};
    transition: 0.5s;
    border: none;
    background-color: white;

    &:hover {
        color:${({ theme }) => theme.colors.robinsEggBlue};
    }
`;

export const AllTasksDone = styled(DoneTasksHidden)`
    &:disabled {
    color: ${({ theme }) => theme.colors.silver};
    transition: none;
}
`