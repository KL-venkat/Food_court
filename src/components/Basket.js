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
import { Grid,Card,Button,Header,Image,Modal, Icon } from 'semantic-ui-react';
import ExpenseForm from './ExpenseForm';
// import ExpenseForm from './ExpenseForm';
//  import Product from './Product';
 import './cart.css'



 function Basket(props) {

  const { cartItems, onAdd, onRemove} = props;                   
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.10;
    const shippingPrice = itemsPrice > 3000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    const [open, setOpen] = React.useState(false)
  
  
  return (
    
      <>
       <Header as='h1' color='red' >My Cart{props.countCartItems}</Header>
        <Card.Content>
        {cartItems.length === 0 && <div>Cart is empty</div>}

       
          {cartItems.length > 0 && 
          cartItems.map((item)=>(
            
          // <div key={item.id}>
          //   <h1 color='red' >{item.name} </h1> 
          //   {/* <i src={item.image} alt="" /> */}
          //   <Image src={item.image} size='tiny' />
              
            <div className="cart_box" key={item.id}>
           
            <div className="cart_img">
             
             <br/>
           {/* <img src={item.image} alt="" /> */}
           <Image src={item.image} size='small' />
               
               {/* <h2>{item.name}</h2> */}
           </div>
           
         
            
         
           
            <div>
              <Button inverted color='red' onClick={() => onRemove(item)} >
                -
              </Button>{' '}

              <Button inverted color='green' onClick={() => onAdd(item)}>
                +
              </Button>
            </div>

           <div>
              {item.qty} x Rs{Number(item.price).toFixed(2)}
           
           </div>
          </div>
        ))}
    
         <Card.Content extra>

        {cartItems.length !== 0 && (
          <Grid>
            <Grid.Row >
              {/* <div >Items Price</div> */}
              <Card.Description ></Card.Description>
              <div >
                <h1 >
             Items Price: Rs{Number(itemsPrice).toFixed(2)}</h1> </div>
              
            </Grid.Row>
            
            <Grid.Row >
              <h1 color='grey'> Tax Price:
             
                Rs{Number(taxPrice).toFixed(2)}</h1>
                
              </Grid.Row>
              
            <Grid.Row  >
               <h1 color='grey'>Shipping Price:
              
                Rs{Number(shippingPrice).toFixed(2)}
                </h1>
             
            </Grid.Row>
              <hr/>
            <Grid.Row color='white'>
              <div >
              <bold><Header as='h1'  >Total price:
             
              
              <Icon name='rupee'></Icon>{Number(totalPrice).toFixed(2)} </Header></bold>
              </div>
              </Grid.Row>
            <br/>
          
              
              
              <Modal size='medium'
    
             onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
            open={open}
             trigger={<Button className='checkout' color='green'> checkout</Button>}>
        
      
            <Modal.Content >
       

              <Modal.Description>
           
      
            <br/>
            <ExpenseForm myTotalPrice={totalPrice}></ExpenseForm>
            <br/>
           </Modal.Description>
        </Modal.Content>
        </Modal>
             
      </Grid> 
        )}
            </Card.Content>   
        </Card.Content>
        </>   
     

     
  );


}
export default Basket;


