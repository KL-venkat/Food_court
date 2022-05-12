import GridBody from './components/Grid_main'
import Headerdemo from './components/Header'
import data from './components/data';
import React,{useState} from 'react';
import Modal1 from './components/Modal';
// import Basket from './components/Basket';
// import ExpenseForm from './components/ExpenseForm';






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
    <Headerdemo countCartItems={cartItems.length}></Headerdemo>
     
      
     
  
    <GridBody products={products} onAdd={onAdd} />
    <Modal1
     cartItems={cartItems}
     onAdd={onAdd}
     onRemove={onRemove}
     ></Modal1>
     {/* <ExpenseForm/> */}
      <br/>
    {/* <Modal1/> */}
  
    </div>
  
    </>
    
    
  );
}

export default App;
