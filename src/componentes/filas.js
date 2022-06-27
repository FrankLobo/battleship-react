import './filas-columnas.css';

export const Filas = ({gameBoard, jugadas}) => {
  const mostar=(seldas)=>{
    let cuadros = [...jugadas]
    if (cuadros[seldas] !== ""){
      return;
    }
  }
  return (
    <>
      <td className="selda" onClick={() => mostar()}>
      </td>
    </>
  )
}