
import React from 'react';
import { Grid } from 'semantic-ui-react';
import Product from './Product';
export default function GridBody(props)
{
  const{products,onAdd}=props;
  return(
    // <Grid>
    //   <h2>Products</h2>
    //   <Grid.Row width>
    //     {products.map((product) => (
    //       <Product key={products.id} product={product} onAdd={onAdd}></Product>
    //     ))}
    //   </Grid.Row>
    //   </Grid>
    <Grid divided='vertically'>
    <Grid columns={3} divided >
  
      <Grid.Row>

        <Grid.Column width={4}>
          <h1>Products</h1>
         <Grid.Row width={4}>
            {products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>     //changed
            ))}
          </Grid.Row>
            
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Grid>
  )
}