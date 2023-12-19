import GridBody from './components/Grid_main'
import Headerdemo from './components/Header'
import data from './components/data';
import React,{useState} from 'react';
// import Start from './components/LoginForm';
// import Modal1 from './components/Modal';
// import Basket from './components/Basket';
// import ExpenseForm from './components/ExpenseForm';
import './App.css'

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }; 

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <>
    <div className="App">
    <Headerdemo countCartItems={cartItems.length}
     cartItems={cartItems}
     onAdd={onAdd}
     onRemove={onRemove}>

       {/* <Start/> */}
   
    </Headerdemo>
    <GridBody products={products} onAdd={onAdd} />
    {/* <Modal1
     cartItems={cartItems}
     onAdd={onAdd}
     onRemove={onRemove}
     ></Modal1> */}

      <br/>
    {/* <Modal1/> */}
     {/* <Login/> */}
    </div>
     
    </>
    
    
  );
}

export default App;
