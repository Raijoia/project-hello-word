import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/Inicio";

// react router install para ficar mudando de paginas de forma mais legivel, sem ter que usar javascript puro
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/post";
import NaoEncontrado from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  return(
    // iniciando a biblioteca
    <BrowserRouter>
      <ScrollToTop />
      {/* fora do routes, ele vira um componente fixo na aplicação */}
      <Menu />

      {/* vai decidir qual rota mostrar na tela */}
      <Routes>
        {/* route aninhada, rota pai */}
        <Route path="/" element={<PaginaPadrao />}>
          {/* fazendo a rota e falando oque vai mostrar */}
          <Route 
            // index para dizer que a rota é a mesma do pai
            index 
            element={<Inicio />} 
          />
          <Route 
            // sem / porque a rota é relativa hà pai, sendo /sobremim
            path="sobremim" 
            element={<SobreMim />} 
          />
        </Route>

        {/* : => seletor coringa, permitindo qualquer coisa após a / */}
        <Route path="posts/:id" element={<Post />} />
        
        <Route
          // * => Abrange todos os tipos de url erradas
           path="*"
          element={<NaoEncontrado />}
        />

      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes
