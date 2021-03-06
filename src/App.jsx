import Navbar from './components/Navbar'
import Home from './pages/Home';
import Produtos from './pages/Produtos'
import Produto from './pages/Produto'
import Carrinho from './pages/Carrinho';
import Finalizacao from './pages/Finalizacao';

import { ContainerGlobal } from './styles/GlobalStyles'
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <ContainerGlobal>
        <Routes>
          <Route index path='/produtos' element={<Produtos />} />
          {/* <Route path='/produtos' element={<Produtos />} /> */}
          <Route path='/carrinho' element={<Carrinho />} />
          <Route path='/finalizacao' element={<Finalizacao />} />
          <Route path='/produtos/:id' element={<Produto />} />
        </Routes>
      </ContainerGlobal>
    </>
  )
}
