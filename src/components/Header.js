import React from 'react'
import { Header,Button,  Modal } from 'semantic-ui-react'

import Basket from './Basket'
import Togglingstate from './Toggle';
import Start from './LoginForm';




function Headerdemo(props) {
  
  const { cartItems, onAdd, onRemove } = props;
  const [open, setOpen] = React.useState(false)
  // const {data}=props
  // console.log(cartItems);
 

  return (
    <>

      {/* <Segment clearing> */}
       {/* <Segment inverted> */}
        <Header as='h1' block inverted color='blue'  >
       
          <header>Food Court</header> 
          {/* <header align='right'  block inverted color='green' >
            <i className="shopping cart icon">{props.countCartItems}   </i> </header>
           <Button floated='right'>
           <Button.Content >
            <Icon name='shop' >{props.countCartItems}</Icon>
            </Button.Content>
            </Button> */}

         
      

        <Modal size='medium'
    
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        // trigger={<Button primary >Proceed to checkout</Button>}>

         trigger={    

          <header align='right'  block inverted color='green' >
          <i className="shopping cart icon">{props.countCartItems}   </i> </header>
        }>

       <Modal.Content >

        <Modal.Description>
          {/* <Header> <Basket/></Header> */}
       
         
         
          <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}
          ></Basket>
          
         
         
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


       {/*adding login form!*/}

       <Start/>
       </Header>
        {/* </Segment> */}
      {/* </Segment> */}
    </>
  )
}


export default Headerdemo;