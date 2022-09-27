import Navbar  from './components/Navbar';
import Header from './components/Header/Header';
//import ItemListContainer from './components/Products/ItemListContainer.js.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetail';
function App() {
  return (
    <>
      <BrowserRouter>
    <Navbar/>
   <Header/>
   <Routes>
    <Route path='/' element={<ItemDetailContainer/>}
    />
   </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
