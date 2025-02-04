import styled, { css } from "styled-components";

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

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const ListButton = styled.button`
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.harlequin};
    transition: 0.5s;
    border: none;
    text-decoration: none;

    &:hover {
        background-color:${({ theme }) => theme.colors.heppyHarlequin};
    }

    &:active {
        border: solid 2px;
        border-color: ${({ theme }) => theme.colors.black};
    }

    ${({ $remove }) => $remove && css`
        color: rgb(240, 239, 239);
        background-color: ${({ theme }) => theme.colors.torchRed};

        &:hover {
        background-color: ${({ theme }) => theme.colors.sunsetOrange};
        }
    `}
`;

export const Content = styled.p`
        display: grid;
        justify-self: start;

        ${({ $done }) => $done && css`
            text-decoration: line-through;
        `}
`;