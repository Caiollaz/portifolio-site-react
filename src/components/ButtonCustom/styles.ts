import { Button } from "react-bootstrap";
import styled from "styled-components";

export const Botao = styled(Button as React.ComponentType<any>)`
    border: none;
    min-width: 234px;
    min-height: 47px;
    border-radius: 3rem;
    background: ${(props) => props.theme.colors.buttonGradient};
`;