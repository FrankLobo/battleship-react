// import { useState } from 'react';
import { Columnas } from './columnas';
import { Filas } from './filas';
import './filas-columnas.css';

export const Tablero = ({ selda }) => {

  // const [jugadas, setJugadas] = useState(Array(81).fill(""));

  // let juegoTablero = () => {
  //   // valores del tablero
  //   // 0 = empty
  //   // 1 = part of a ship
  //   // 2 = a sunken part of a ship
  //   // 3 = a missed shot
  //   let gameBoard = [
  //     [1, 1, 1, 1, 1, 0, 0, 0, 1],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 1],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 1],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 1],
  //     [1, 0, 0, 1, 1, 0, 0, 0, 0],
  //     [1, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [1, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [1, 1, 1, 1, 0, 0, 0, 0, 0]
  //   ];
  // }

  return (
    <>
      <h1 className='titulo'>Battleship</h1>
      <table className="tablero">
        <thead>
          <tr>
            <Columnas /> {/*espacio vacio de la esquina superior izquierda*/}
            <Columnas selda="1" />
            <Columnas selda="2" />
            <Columnas selda="3" />
            <Columnas selda="4" />
            <Columnas selda="5" />
            <Columnas selda="6" />
            <Columnas selda="7" />
            <Columnas selda="8" />
            <Columnas selda="9" />
          </tr>
        </thead>
        <tbody>
          <Filas vertical="A" seldaInterna="" />
          <Filas vertical="B" seldaInterna="" />
          <Filas vertical="C" seldaInterna="" />
          <Filas vertical="D" seldaInterna="" />
          <Filas vertical="E" seldaInterna="" />
          <Filas vertical="F" seldaInterna="" />
          <Filas vertical="G" seldaInterna="" />
          <Filas vertical="H" seldaInterna="" />
          <Filas vertical="I" seldaInterna="" />
        </tbody>
      </table>
    </>
  )
}