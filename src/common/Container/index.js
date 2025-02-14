import styled from "styled-components";

export const Container = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: ${({theme})=> theme.breakpoints.mobile}px) {
        padding: 10px;
    }
`;