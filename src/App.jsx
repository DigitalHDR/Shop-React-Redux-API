import Navbar from './components/Navbar'
import Home from './pages/Home';
import Produtos from './pages/Produtos'
import Produto from './pages/Produto'
import { ContainerGlobal } from './styles/GlobalStyles'
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <ContainerGlobal>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/produtos' element={<Produtos />} />
          <Route path='/produtos/:id' element={<Produto />} />
        </Routes>
      </ContainerGlobal>
    </>
  )
}
