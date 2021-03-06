import './battleship.css';
import { Tablero } from './componentes/tablero';

function Battleship() {
  const coordenadas = () => {
    let sign = prompt("What's your sign?");
    return sign
  }
  return (
    <>
      <Tablero />
      <div className='botones'>
        <button className='disparar' onClick={() => coordenadas()}>Fuego</button>
        <button className='barco-a-la-vista'>Mostrar barco</button>
      </div>
    </>
  );
}

export default Battleship;
