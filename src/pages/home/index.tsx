import { ButtonCustom } from "../../components/ButtonCustom";
import { NavBar } from "../../components/Navbar";
import {
  AsteroidColor,
  AsteroidPreto,
  Container,
  ContainerDescricao,
  ContainerTitulo,
  Destaque,
  Paragrafo,
  Titulo,
} from "./styles";

export function Home() {
  return (
    <>
      <AsteroidPreto />
      <AsteroidColor />
      <NavBar />
      <Container>
        <ContainerTitulo>
          <Titulo>
            Caio Labella <Destaque>+</Destaque> <br />
            Development <br />
            Portfolio
          </Titulo>
        </ContainerTitulo>
        <ContainerDescricao>
          <Paragrafo>
            Bem-vindo ao meu mundo minimalista! Aqui, busco criar interfaces
            simples e funcionais, unindo UX/UI e desenvolvimento front-end com
            paixão.
          </Paragrafo>
          <Paragrafo>
            Este é o meu espaço digital, onde compartilho meu comprometimento
            com o design centrado no usuário. Explore à vontade!
          </Paragrafo>
          <Paragrafo>
            Ah, e se quiser compartilhar suas ideias ou projetos, a seção de
            Contato está aberta. Este site foi criado por{" "}
            <Destaque>Caio Labella</Destaque>. Aproveite a jornada!
          </Paragrafo>
        </ContainerDescricao>
        <ButtonCustom>Entre em Contato</ButtonCustom>
      </Container>
    </>
  );
}
