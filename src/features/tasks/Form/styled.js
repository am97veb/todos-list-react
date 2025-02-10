import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 150px;
    gap: 20px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const FormButton = styled.button`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.surfieGreen};
    transition: 0.5s;
    border: none;
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