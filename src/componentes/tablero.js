import { useState } from 'react';
import { Columnas } from './columnas';
import { Filas } from './filas';
import './filas-columnas.css';

export const Tablero = ({ vertical }) => {

  //   // valores del tablero
  //   // 0 = empty
  //   // 1 = part of a ship
  //   // 2 = a sunken part of a ship
  //   // 3 = a missed shot

  const [jugadas, setJugadas] = useState(Array(81).fill(""));

  const juego = (selda) => {
    let gameBoard = [
      [1, 1, 1, 1, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0, 0]
    ];
    for (let posicion in gameBoard) {
      gameBoard[posicion].forEach(posicionSelda => {
        if (selda[posicionSelda[0]] === "" ||
          selda[posicionSelda[1]] === "" ||
          selda[posicionSelda[2]] === "" ||
          selda[posicionSelda[3]] === "" ||
          selda[posicionSelda[4]] === "" ||
          selda[posicionSelda[5]] === "" ||
          selda[posicionSelda[6]] === "" ||
          selda[posicionSelda[7]] === "" ||
          selda[posicionSelda[8]] === ""
        ) {
          return;
        } else if (
          selda[posicionSelda[0]] === selda[posicionSelda[1]] &&
          selda[posicionSelda[1]] === selda[posicionSelda[2]] &&
          selda[posicionSelda[2]] === selda[posicionSelda[3]] &&
          selda[posicionSelda[3]] === selda[posicionSelda[4]] &&
          selda[posicionSelda[4]] === selda[posicionSelda[5]] &&
          selda[posicionSelda[5]] === selda[posicionSelda[6]] &&
          selda[posicionSelda[6]] === selda[posicionSelda[7]] &&
          selda[posicionSelda[7]] === selda[posicionSelda[8]]
        ) {
          return;
        }
        return;
      })
    }
  }
  return (
    <>
      <h1 className='titulo'>Battleship</h1>
      <table className="tablero">
        <thead>
          <tr>
            <Columnas /> {/*espacio vacio de la esquina superior izquierda*/}
            <Columnas seldaCabecera="1" />
            <Columnas seldaCabecera="2" />
            <Columnas seldaCabecera="3" />
            <Columnas seldaCabecera="4" />
            <Columnas seldaCabecera="5" />
            <Columnas seldaCabecera="6" />
            <Columnas seldaCabecera="7" />
            <Columnas seldaCabecera="8" />
            <Columnas seldaCabecera="9" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="fila">{vertical = "A"}</th>
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
          </tr>
          <tr>
            <th scope="row" className="fila">{vertical = "B"}</th>
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
          </tr>
          <tr>
            <th scope="row" className="fila">{vertical = "C"}</th>
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
          </tr>
          <tr>
            <th scope="row" className="fila">{vertical = "D"}</th>
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
          </tr>
          <tr>
            <th scope="row" className="fila">{vertical = "E"}</th>
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
          </tr>
          <tr>
            <th scope="row" className="fila">{vertical = "F"}</th>
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
          </tr>
          <tr>
            <th scope="row" className="fila">{vertical = "G"}</th>
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
          </tr>
          <tr>
            <th scope="row" className="fila">{vertical = "H"}</th>
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
          </tr>
          <tr>
            <th scope="row" className="fila">{vertical = "I"}</th>
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
            <Filas posicion={0} />
          </tr>
          {/* <Filas vertical="A" seldaInterna={seldaInterna}/> */}
          {/* <Filas vertical="B" seldaInterna={seldaInterna}/> */}
          {/* <Filas vertical="C" seldaInterna={seldaInterna}/> */}
          {/* <Filas vertical="D" seldaInterna={seldaInterna}/> */}
          {/* <Filas vertical="E" seldaInterna={seldaInterna}/> */}
          {/* <Filas vertical="F" seldaInterna={seldaInterna}/> */}
          {/* <Filas vertical="G" seldaInterna={seldaInterna}/> */}
          {/* <Filas vertical="H" seldaInterna={seldaInterna}/> */}
          {/* <Filas vertical="I" seldaInterna={seldaInterna}/> */}
        </tbody>
      </table>
    </>
  )
}
