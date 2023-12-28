import { CardProducto } from './CardProducto'

export const ResultadoBusqueda = ({ results, estaCargando }) => {
  return (
    <div>
      <h2>Resultados</h2>

      {estaCargando ? (
        <p>Cargando...</p>
      ) : (
        <div className='cards'>
          {results.map((producto) => (
            <CardProducto key={producto.CodigoProducto} product={producto} />
          ))}
        </div>
      )}
    </div>
  )
}
