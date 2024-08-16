import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Titulo = styled.h1`
  background: ${(props) => props.theme.colors.textGradient};
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SubTitulo = styled.h2`
  color: ${(props) => props.theme.colors.white};
`;
