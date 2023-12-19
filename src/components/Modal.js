
// import Togglingstate from './Toggle'
// import React from 'react'
// import {Button, Image, Modal } from 'semantic-ui-react'
// import ExpenseForm from './ExpenseForm'

// // import Basket from './Basket'

// function Modal1() {
//   const [open, setOpen] = React.useState(false)

//   return (
//     <Modal
//       onClose={() => setOpen(false)}
//       onOpen={() => setOpen(true)}
//       open={open}
//       trigger={<Button primary>Proceed to checkout</Button>}
//     >
//       <Modal.Header>Select a Photo</Modal.Header>
//       <Modal.Content image>
//         <Image size='medium' src='https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  wrapped />
//         <Modal.Description>
//           {/* <Header> <Basket/></Header> */}
//          <Togglingstate/>
//          <ExpenseForm/>
         
        
 
         
  
//         </Modal.Description>
//       </Modal.Content>
//       <Modal.Actions>
//         {/* <Button color='black' onClick={() => setOpen(false)}>
//          No
//         </Button> */}
//         <Button
//           content="OK"
//           labelPosition='right'
//           icon='checkmark'
//           onClick={() => setOpen(false)}
//           positive
//         />
//       </Modal.Actions>
//     </Modal>
//   )
// }

// export default Modal1;





// import Togglingstate from './Toggle'
import React from 'react'
import {Button,   Modal } from 'semantic-ui-react'
import ExpenseForm from './ExpenseForm'
import Basket from './Basket'
import Togglingstate from './Toggle'




function Modal1(props) {
  
  const { cartItems, onAdd, onRemove } = props;
  const [open, setOpen] = React.useState(false)
  // const {data}=props
  // console.log(cartItems);
 

  return (
    <>

     

    <Modal size='tiny'
    
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button primary>Proceed to checkout</Button>}>
        
      <Modal.Header >      </Modal.Header>
      <Modal.Content >
       

        <Modal.Description>
          {/* <Header> <Basket/></Header> */}
       
         
         
          <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}
          ></Basket>
          
         <br/>
         <ExpenseForm/>
         <br/>
         <Togglingstate/>
        
 
         
  
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        {/* <Button color='black' onClick={() => setOpen(false)}>
         No
        </Button> */}
        
        <Button
          
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
    </>
  )
}


export default Modal1;
