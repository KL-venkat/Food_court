import React from 'react'
import { Header,Segment  } from 'semantic-ui-react'


const Headerdemo = (props) => (
  <Segment clearing >
    <Segment inverted>
      <Header as='h1' block inverted color='blue'  >
        {/* <h1>Food Court</h1> */}
        <header>Food Court</header>
        {/* <br/>
        <h1>sign in</h1> */}
      
       
      
      {/* </Header>  */}

      {/* <Header as='h3' block inverted color='green' floated='right'> */}
       
      <header align='right'  block inverted color='green' >
       

      
      <i className="shopping cart icon">{props.countCartItems}</i> </header>
     
      </Header>

  
    </Segment>
  </Segment>
)

export default Headerdemo;