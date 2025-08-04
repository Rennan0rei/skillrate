import { useParams } from 'react-router-dom'

function Projeto() {
  const { id } = useParams()

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Detalhes do Projeto {id}</h1>
    </div>
  )
}

export default Projeto
