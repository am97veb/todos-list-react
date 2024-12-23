import styled from "styled-components";

export const StyledForm = styled.form`
    max-width: 1500px;
    background-color: white;
    width: 100%;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 150px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const FormNewTask = styled.input`
    padding: 10px;
    margin: 10px;
    border: solid #dddada 1px;
    min-width: 50px;
`;

export const FormButton = styled.button`
    color: white;
    background-color: rgb(0, 143, 143);
    transition: 0.5s;
    border: none;
    margin: 10px;
    font-family: "Montserrat", sans-serif;


    &:hover {
    background-color: hsl(180, 100%, 35%);
    transform: scale(1.1);
    }

    @media (max-width: 768px) {
        padding: 10px;
        margin-top: 0px;
    }
`;