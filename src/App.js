import Navbar  from './components/Navbar';
import Header from './components/Header/Header';
import ItemListContainer from './components/Products/ItemListContainer.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetail';
import Cart from './components/Cart/Cart';
import CartContextProvider from "./context/cartContext";

function App() {
  return (
    <CartContextProvider>
  
      <BrowserRouter>
    <Navbar/>
   <Header/>
   <Routes>
   <Route path='/' element={<ItemListContainer/>}/>

   <Route path='/category/:cat' element={<ItemListContainer/>}
    />

   
       <Route path='/item/:id' element={<ItemDetailContainer/>}
    />

<Route path='/cart' element={<Cart/>}/>



    <Route path='*' element={<h1>404 Te Perdiste</h1>}/>
   </Routes>
      </BrowserRouter>
      </CartContextProvider>

  );
}

export default App;
