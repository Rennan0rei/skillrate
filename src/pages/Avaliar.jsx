import { useParams } from 'react-router-dom'

function Avaliar() {
  const { id } = useParams()

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Avaliar Projeto {id}</h1>
    </div>
  )
}

export default Avaliar
