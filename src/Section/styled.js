import styled from "styled-components";

export const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    max-width: 1500px;
    background-color: white;
    width: 100%;
    padding-right: 20px;
    margin: 10px 0px 2px;

    @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-bottom: 20px;
    }
`;

export const SectionHeader = styled.h2`
    max-width: 1500px;
    background-color: white;
    width: 100%;
    padding: 20px;
    margin: 0px 0px 2px;
`;