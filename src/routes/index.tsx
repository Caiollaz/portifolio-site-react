import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { SobreMim } from "../pages/sobre-mim";
import { Contato } from "../pages/contato";
import { Projetos } from "../pages/projetos";
import { NaoEncontrado } from "../pages/naoEncontrado";

export function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre-mim" element={<SobreMim />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/*" element={<NaoEncontrado />}/>
            </Routes>
        </BrowserRouter>
    )
}