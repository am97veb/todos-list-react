import styled from "styled-components";

export const ButtonsForAllTasks = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 10px 0;
    }
`;

export const DoneTasksHidden = styled.button`
    color: rgb(0, 160, 160);
    transition: 0.5s;
    border: none;
    background-color: white;

    &:hover {
        color: hsl(180, 100%, 36%);
    }
`;

export const AllTasksDone = styled(DoneTasksHidden)`
    &:disabled {
    color: rgba(194, 194, 194, 0.692);
    transition: none;
}
`