import styled from "styled-components";

export const StyledForm = styled.form`
    max-width: 1500px;
    background-color: ${({theme})=> theme.colors.white};
    width: 100%;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 150px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const FormNewTask = styled.input`
    padding: 10px;
    margin: 10px;
    border: solid 1px;
    border-color: ${({ theme }) => theme.colors.alto};
    min-width: 50px;
`;

export const FormButton = styled.button`
    color: ${({theme})=> theme.colors.white};
    background-color: ${({ theme }) => theme.colors.persianGreen};
    transition: 0.5s;
    border: none;
    margin: 10px;
    font-family: "Montserrat", sans-serif;


    &:hover {
    background-color: ${({ theme }) => theme.colors.robinsEggBlue};
    transform: scale(1.1);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        padding: 10px;
        margin-top: 0px;
    }
`;