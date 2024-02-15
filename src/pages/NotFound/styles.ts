import styled from "styled-components";
import { TbError404 } from "react-icons/tb";

export const Container = styled.div` 
    background-color: ${(props) => props.theme.COLORS.pageBackground};
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px; 
`;

export const Icon = styled(TbError404)`
    color: ${(props) => props.theme.COLORS.primary};
    font-size: 140px;
`

export const ButtonContainer = styled.div`
    width: 160px;
`