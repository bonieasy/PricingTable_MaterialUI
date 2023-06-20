import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import styled from "styled-components";

export const CardStyled = styled(Card)`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    box-shadow: 0px 1px 2px rgba(142, 150, 185, 0.25);
    font-family: 'Open Sans', sans-serif;

    .popular {
        background: var(--blue);
        color: var(--white);
    }

    .popular-header {
        
        background-color: var(--yellow);
        color: var(--blue);

    }
`;

export const Title = styled.div`
    border-radius: 8px 8px 0px 0px;
    height: 4.8rem;
    padding: 1.375rem 1.875rem;

`;

export const FooterBox = styled.footer`
    padding: 0 1.875rem;
    
`;

export const ButtonSubscribe = styled(Button)`
    width: 100%;
    height: 3.188rem;
    border-radius: 10px;
    
`;

export const Container = styled.div`
    padding: 0 1.875rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 1rem;
`;