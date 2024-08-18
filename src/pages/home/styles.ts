import styled from "styled-components";
import asteroidPb from "../../imagens/asteroid-pb.png";
import asteroidColor from "../../imagens/asteroid-color.png";

export const Container = styled.div`
  margin: 13rem 0 0 10%;
`;

export const ContainerTitulo = styled.div`
  width: 635px;
  height: 248px;
`;

export const ContainerDescricao = styled.div`
  width: 635px;
  height: 248px;
`;

export const Titulo = styled.h1`
  font-size: 4rem;
  color: ${(props) => props.theme.colors.lightGray};
  font-weight: bold;
`;

export const Paragrafo = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.colors.lightGray};
  font-weight: 500;
`;

export const Destaque = styled.span`
  background: ${(props) => props.theme.colors.textGradient};
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const AsteroidPreto = styled.img.attrs({
  src: asteroidPb,
})`
  float: left;
`;

export const AsteroidColor = styled.img.attrs({
  src: asteroidColor,
})`
  float: right;
`;
