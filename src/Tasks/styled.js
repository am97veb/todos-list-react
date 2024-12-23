import styled, { css } from "styled-components";

export const TasksList = styled.ul`
    max-width: 1500px;
    background-color: white;
    width: 100%;
    padding: 40px 0 20px 0;
    margin-top: 2px;
`;

export const ListItem = styled.li`
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    align-items: center;
    justify-items: center;
    margin: 0 10px;
    list-style: none;
    border-bottom: solid 1px #dddada;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const ListButton = styled.button`
    width: 30px;
    height: 30px;
    color: white;
    background-color: rgb(55, 196, 0);
    transition: 0.5s;
    border: none;
    text-decoration: none;

    &:hover {
        background-color: rgb(62, 219, 0);
    }

    &:active {
        border: solid 2px black;
    }

    ${({ remove }) => remove && css`
        color: rgb(240, 239, 239);
        background-color: rgb(255, 34, 34);

        &:hover {
        background-color: rgb(255, 71, 71);
        }
    `}
`;

export const Content = styled.p`
        display: grid;
        justify-self: start;

        ${({ done }) => done && css`
            text-decoration: line-through;
        `}
`;