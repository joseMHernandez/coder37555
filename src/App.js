import Navbar  from './components/Navbar';
import Header from './components/Header/Header';
import ItemListContainer from './components/Products/ItemListContainer.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetail';
function App() {
  return (
    <>
      <BrowserRouter>
    <Navbar/>
   <Header/>
   <Routes>
    <Route path='/category/:id' element={<ItemDetailContainer greeting='this is my webapp'/>}
    />
   <Route path='/category/:cat' element={<ItemListContainer/>}
    />
       <Route path='/' element={<ItemListContainer/>}/>


    <Route path='*' element={<h1>404 Te Perdiste</h1>}/>
   </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
