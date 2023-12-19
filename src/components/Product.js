import React from 'react';
import {Grid,Card,Button } from 'semantic-ui-react'

export default function Product(props) {
  const { product, onAdd } = props;
  return(
     
      <Grid.Row>    
        <Grid.Column width={15}> 
          <Card
          image={product.image}
          header={product.name}
          meta={product.offer}
          description={product.price}
              
          />
          <Button primary  onClick={ ()=>onAdd(product)}>Add Item</Button>

         </Grid.Column>
    </Grid.Row>
    
  );
}


// export default function Product(props) {
//   const { product, onAdd } = props;
//   return(
    
//     <Card.Group itemsPerRow={4} >    
        
        
  
//      <Card  color='red'
//         image={product.image}
//         header={product.name}
//         meta={product.offer}
//         description={product.price}
      
//       card/>
//      <Button primary  onClick={ ()=>onAdd(product)}>Add Item</Button>
//     </Card.Group> 
   
//   );
// }
