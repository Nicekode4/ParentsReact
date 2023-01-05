import './App.scss';
import Footer from './Componets/Footer/Footer';
import Header from './Componets/Header/Header';
import Nav from './Componets/Nav/Nav';
import Main from './Componets/Main/Main';

function App() {

  const navList = [
    "Forside",
   "Produkter",
   "Om os",
    "Ledige stillinger",
    "Kontakt os"
]

const footerList = [
  "Forside",
 "Produkter",
 "Om os",
  "Ledige stillinger",
  "Kontakt os yo!"
]

  return (
    <div className="App">
      <Header title="Parents React" />
      <Nav data={navList} />
      <Main />
    <Footer data={footerList}/>
    </div>
  );
}

export default App;
