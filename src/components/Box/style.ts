import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import styled from "styled-components";

export const CardStyled = styled(Card)`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    box-shadow: 0px 1px 2px rgba(142, 150, 185, 0.25);
    //border-radius: 8px;

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
    /* overflow: hidden;
    width: 150%;
    height: 100%;
    display: flex;
    align-items: center; */
`;

export const FooterBox = styled.footer`

    
`;

export const ButtonSubscribe = styled(Button)`
    width: 100%;
    height: 3.188rem;
    border-radius: 10px;
    
`;