import { Nav } from "react-bootstrap";
import { NavBarCustom, Container, Link  } from "./styles";

export function NavBar() {
  return (
    <>
      <NavBarCustom>
        <Container>
          <Nav className="me-auto">
            <Link href="/">Home</Link>
            <Link href="/sobre-mim">Sobre mim</Link>
            <Link href="/contato">Contato</Link>
          </Nav>
        </Container>
      </NavBarCustom>
    </>
  );
}
