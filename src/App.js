import Navbar  from './components/Navbar';
import Header from './components/Header/Header';
import ItemListContainer from './components/Products/ItemListContainer.js.js';
function App() {
  return (
    <div className="App">
    <Navbar/>
   <Header/>
  <ItemListContainer greeting='esta es mi pagina web'/>
    </div>
  );
}

export default App;
