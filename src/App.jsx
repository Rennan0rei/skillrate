import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import NovoProjeto from './pages/NovoProjeto'
import Projeto from './pages/Projeto'
import Avaliar from './pages/Avaliar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novo-projeto" element={<NovoProjeto />} />
        <Route path="/projeto/:id" element={<Projeto />} />
        <Route path="/avaliar/:id" element={<Avaliar />} />
      </Routes>
    </>
  )
}

export default App
