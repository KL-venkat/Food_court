// import React from 'react';
// import { Grid,Card,Button,Header } from 'semantic-ui-react';
// // import ExpenseForm from './ExpenseForm';
// import Modal1 from './Modal';

// // export default function Basket1() {


//  function Basket(props) {

//   const { cartItems, onAdd, onRemove } = props;
//   const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
//   const taxPrice = itemsPrice * 0.10;
//   const shippingPrice = itemsPrice > 3000 ? 0 : 20;
//   const totalPrice = itemsPrice + taxPrice + shippingPrice;
//   return (
    
//       <Card>
//        <Header as='h1' color='red'> Cart Items</Header>
//         <Card.Content>
//         {cartItems.length === 0 && <div>Cart is empty</div>}

       
//           {cartItems.length > 0 && 
//           cartItems.map((item)=>(
//           <div key={item.id}>
//             <Grid.Row color='red' >{item.name}</Grid.Row>
           
//             <div>
//               <Button inverted color='red' onClick={() => onRemove(item)} >
//                 -
//               </Button>{' '}

//               <Button inverted color='green' onClick={() => onAdd(item)}>
//                 +
//               </Button>
//             </div>

//             <div >
//               {item.qty} x Rs{Number(item.price).toFixed(2)}
//             </div>
//           </div>
//         ))}
    
//          <Card.Content extra>

//         {cartItems.length !== 0 && (
//           <Grid>
//             <hr></hr>
            
//             <Grid.Row color='blue'>
//               {/* <div >Items Price</div> */}
//               <Card.Description >Items price:</Card.Description>
//               <div >Rs{Number(itemsPrice).toFixed(2)}</div>
//             </Grid.Row>
//             <Grid.Row color='red'>
//               <div >Tax Price:</div>
//               <div >Rs{Number(taxPrice).toFixed(2)}</div>
//               </Grid.Row>
//             <Grid.Row basic color='violet'>
//               <div >Shipping Price:</div>
//               <div >
//                 Rs{Number(shippingPrice).toFixed(2)}
//               </div>
//             </Grid.Row>

//             <Grid.Row color='green'>
//               <div >
//                 <strong>Total Price:</strong>
//               </div>
//               <div >
//                 <strong>Rs{Number(totalPrice).toFixed(2)}</strong>
//               </div>
//               </Grid.Row>
//             <hr />
//            <Grid.Row>
//               <Button basic color='green' content='green' onClick={() => alert('proceed to check out ')}>
            
//                 Checkout 
                          
//               </Button>
//               {/* <ExpenseForm/> */}
              
//             </Grid.Row>
            
            
           
//             </Grid>    
//         )}
//             </Card.Content>   
//         </Card.Content>
//       </Card>    
//   );
// }

// return(
//   <div>
//     <Modal1 data={Basket1}/>
//   </div>
// )
// }
// export default Basket;


import React from 'react';
import { Grid,Card,Button,Header } from 'semantic-ui-react';
// import ExpenseForm from './ExpenseForm';


 function Basket(props) {

  const { cartItem, onAdd, onRemove } = props;
  const itemsPrice = cartItem.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.10;
    const shippingPrice = itemsPrice > 3000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
  
  return (
    
      <Card>
       <Header as='h1' color='red'> Cart Items</Header>
        <Card.Content>
        {cartItem.length === 0 && <div>Cart is empty</div>}

       
          {cartItem.length > 0 && 
          cartItem.map((item)=>(
          <div key={item.id}>
            <Grid.Row color='red' >{item.name}</Grid.Row>
           
            <div>
              <Button inverted color='red' onClick={() => onRemove(item)} >
                -
              </Button>{' '}

              <Button inverted color='green' onClick={() => onAdd(item)}>
                +
              </Button>
            </div>

            <div >
              {item.qty} x Rs{Number(item.price).toFixed(2)}
            </div>
          </div>
        ))}
    
         <Card.Content extra>

        {cartItem.length !== 0 && (
          <Grid>
            <hr></hr>
            
            <Grid.Row color='blue'>
              {/* <div >Items Price</div> */}
              <Card.Description >Items price:</Card.Description>
              <div >Rs{Number(itemsPrice).toFixed(2)}</div>
            </Grid.Row>
            <Grid.Row color='red'>
              <div >Tax Price:</div>
              <div >Rs{Number(taxPrice).toFixed(2)}</div>
              </Grid.Row>
            <Grid.Row basic color='violet'>
              <div >Shipping Price:</div>
              <div >
                Rs{Number(shippingPrice).toFixed(2)}
              </div>
            </Grid.Row>

            <Grid.Row color='green'>
              <div >
                <strong>Total Price:</strong>
              </div>
              <div >
                <strong>Rs{Number(totalPrice).toFixed(2)}</strong>
              </div>
              </Grid.Row>
            <hr />
           <Grid.Row>
              <Button basic color='green' content='green' onClick={() => alert('proceed to check out ')}>
            
                Checkout 
                          
              </Button>
              {/* <ExpenseForm/> */}
              
            </Grid.Row>
            
            
           
            </Grid>    
        )}
            </Card.Content>   
        </Card.Content>
      </Card>    
     

     
  );


}
export default Basket;


