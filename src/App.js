import './App.css';
import Boton from './componentes/Boton';
import BotonConComponentes from './componentes/BotonConComponentes';
import EditarTexto from './componentes/EditarTexto';
import Encabezado from './componentes/Encabezado';
import FuncionsBoton from './componentes/FuncionsBoton';
import Imaxen from './componentes/Imaxen';
import ImaxenConBotonVerNoVer from './componentes/ImaxenConBotonVerNoVer';
import Main from './componentes/Main';
import Pie from './componentes/Pie';
import Saudo from './componentes/Saudo';

function App() {
  return (
    <div className="App">
      <Encabezado />
      <Main>
        <BotonConComponentes>
          <Saudo />
        </BotonConComponentes>
        <Boton />
        <FuncionsBoton />
        <Imaxen />
        <ImaxenConBotonVerNoVer />
        <EditarTexto />
      </Main>
      <Pie />      
    </div>
  );
}

export default App;
