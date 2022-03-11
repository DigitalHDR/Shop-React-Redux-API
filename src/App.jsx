import Navbar from './components/Navbar'
import Produtos from './components/Produtos'
import { ContainerGlobal } from './styles/GlobalStyles'

export default function App() {
  return (
    <div>
      <Navbar />
      <ContainerGlobal>
        <Produtos />
      </ContainerGlobal>
    </div>
  )
}
