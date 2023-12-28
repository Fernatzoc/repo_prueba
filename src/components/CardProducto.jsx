// eslint-disable-next-line react/prop-types
export const CardProducto = ({ product }) => {
  return (
    <>
      <div className='tarjeta'>
        {/* <div className='titulo'>Una tarjeta básic</div> */}
        <div className='cuerpo'>
          <img className='imgSize' src={product.Foto} alt='muestra'></img>
          <p>{product.Precio}</p>
          <p>{product.Descripcion}</p>
        </div>
      </div>
    </>
  )
}
