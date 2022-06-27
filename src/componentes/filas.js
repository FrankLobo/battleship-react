import './filas-columnas.css';
// import Seldas from './seldas';
export const Filas = ({ vertical, seldaInterna }) => {
  return (
    <>
      <tr>
        <th scope="row" className="fila">{vertical}</th>
        {/* <Seldas />
        <Seldas />
        <Seldas />
        <Seldas />
        <Seldas />
        <Seldas />
        <Seldas />
        <Seldas />
        <Seldas /> */}
        <td className="selda">{seldaInterna}</td>
        <td className="selda">{seldaInterna}</td>
        <td className="selda">{seldaInterna}</td>
        <td className="selda">{seldaInterna}</td>
        <td className="selda">{seldaInterna}</td>
        <td className="selda">{seldaInterna}</td>
        <td className="selda">{seldaInterna}</td>
        <td className="selda">{seldaInterna}</td>
        <td className="selda">{seldaInterna}</td>
      </tr>
    </>
  )
}