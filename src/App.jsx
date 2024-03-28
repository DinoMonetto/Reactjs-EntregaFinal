
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer greetings={"Listado de Productos"} />} />
              <Route path="/category/:categoryId" element={<ItemListContainer greetings={"Listado de Productos filtrados"} />}/>
              <Route path="/detail/:productId" element={<ItemDetailContainer />} />
              <Route path='/Cart' element={<Cart/>}/>
              <Route path="/Checkout" element={<Checkout />}/>
            </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}
export default App
