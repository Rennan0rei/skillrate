import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">SkillRate</Link>
      <div className="space-x-4">
        <Link to="/novo-projeto" className="text-blue-500 hover:underline">Novo Projeto</Link>
      </div>
    </nav>
  )
}

export default Navbar
