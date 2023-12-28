import { useState } from 'react'

export const BuscarComponente = ({ buscar }) => {
  const [query, setQuery] = useState('')

  const inputChange = (event) => {
    setQuery(event.target.value)
  }

  const busqueda = () => {
    buscar(query)
  }

  return (
    <div>
      <input type='text' value={query} onChange={inputChange} />
      <button onClick={busqueda}>Buscar Producto</button>
    </div>
  )
}
