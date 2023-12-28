import './App.css'
import { useState } from 'react'

import { BuscarComponente } from './components/BuscarComponente'
import { ResultadoBusqueda } from './components/ResultadoBusqueda'

function App() {
  const [resultadosBusqueda, setResultadosBusqueda] = useState([])
  const [estaCargando, setEstaCargando] = useState(false)

  //Traducir el texto

  const getText = async (text) => {
    try {
      setEstaCargando(true)

      const response = await fetch(
        `https://guatemaladigital.com:85/api/Busqueda?CadenaBusqueda=${text}`
      )

      const data = await response.json()

      return data['Response']['Cadena']
    } catch (error) {
      console.log('Error')
    } finally {
      setEstaCargando(false)
    }
  }

  //Realizar la busqueda

  const handleBusqueda = async (texto) => {
    const nuevotexto = await getText(texto)

    try {
      setEstaCargando(true)

      const response = await fetch(
        `https://guatemaladigital.com:85/api/Busqueda?CadenaBusqueda=${nuevotexto}&NumeroPagina=1&Traduccion=${nuevotexto}`
      )
      const data = await response.json()

      setResultadosBusqueda(data['Response'][0]['Articulos'])
    } catch (error) {
      console.log('Error', error)
    } finally {
      setEstaCargando(false)
    }
  }

  return (
    <div>
      <h1>Buscar Productos</h1>
      <BuscarComponente buscar={handleBusqueda} />
      <ResultadoBusqueda
        results={resultadosBusqueda}
        estaCargando={estaCargando}
      />
    </div>
  )
}

export default App
