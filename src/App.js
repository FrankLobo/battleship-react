import './App.css';
import { Tablero } from './componentes/tablero';
function App() {
  return (
    <>
      <Tablero />
      <div className='botones'>
        <button className='disparar'>Fuego</button>
        <button className='barco-a-la-vista'>Mostrar barco</button>
      </div>
    </>
  );
}

export default App;
