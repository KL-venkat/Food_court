
import React from 'react';
import { Grid } from 'semantic-ui-react';
import Product from './Product';
// import ExpenseForm from './ExpenseForm';

export default function GridBody(props)
{
  const{products, onAdd}=props;
  return(
    <div className='products'>
    <Grid width={0}>  
      {/* <Header as='h1'>Products</Header> */}
    
       <Grid.Row width> 
     
        {products.map((product) => (
          <Product key={products.id} product={product} onAdd={onAdd}></Product>
        ))}
       </Grid.Row>
          
    </Grid>
    </div>

  )
}