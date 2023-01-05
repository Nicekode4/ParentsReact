import './App.scss';
import {Footer} from './Componets/Footer/Footer';
import {Header} from './Componets/Header/Header';
import { Nav } from './Componets/Nav/Nav';
import {Main} from './Componets/Main/Main';

function App() {

  return (
    <div className="App">
      <Header title="Parents React" />
      <Nav />
      <Main />
    <Footer/>
    </div>
  );
}

export default App;
