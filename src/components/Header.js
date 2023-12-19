import React from 'react'
import { Header,Button,  Modal, Image } from 'semantic-ui-react'

import Basket from './Basket'
import Togglingstate from './Toggle';
import Start from './LoginForm';




function Headerdemo(props) {
  
  const { cartItems, onAdd, onRemove } = props;
  const [open, setOpen] = React.useState(false)
  // const {data}=props
  // console.log(cartItems);
   const src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5FbYlYOz4oySnqbKEgsDjyMHBcdelGgsmVaCwqYp-G1yAbjdNrhzCK8lsNPRQoHMio7I&usqp=CAU'
  


  return (
    <>

      {/* <Segment clearing> */}
       {/* <Segment inverted> */}
        <Header as='h1' block inverted color='blue'  >
          {/* <header><Image src={src} size='tiny' verticalAlign='top' />Food Court</header>  */}
          <Image src={src} verticalAlign='center' size='massive' circular /> <span className='header'>Food Court </span>
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