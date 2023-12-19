

const data={
   
    products:[
        {
            
            id:'1',
            name:'Biryani',
            price:'300',
            image :'https://media.istockphoto.com/photos/chicken-biriyani-picture-id1345624336?b=1&k=20&m=1345624336&s=612x612&w=0&h=gPAqjaiYjKU16leKNL0vbbdo3lwu4Wr_PoyuC95bbN8='  
            
  
  
        },
        {
           id:'2',
            name:'Chocolates',
            price:'600',
            image:'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            
  
        },
        {
            id:'3',
            name:'Icecreams',
            price:'700',
            image:'https://images.pexels.com/photos/9642179/pexels-photo-9642179.jpeg?cs=srgb&dl=pexels-mariakray-9642179.jpg&fm=jpg'
          
  
        },
        {
            id:'4',
            name:'Noodles',
            price:'130',
            image:'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
           
  
        },
        {
            id:'5',
            name:'Pizza',
            price:'500',
            image:'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600'
            
  
        },
        {
            id:'6',
            name:'Burger',
            price:'400',
            image:'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
         
  
        },
        {
            id:'7',
          name:'Donut',
          price:'250',
          image:'https://images.pexels.com/photos/239581/pexels-photo-239581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          
  
      },
      {
        id:'8',
        name:'KFC',
        price:'1190',
  
        image:'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=600'
        

    },
    {
        id:'9',
        name:'French fries',
        price:'130',
        image:'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
     

    },
    {
        id:'10',
        name:'Pasta',
        price:'120',
        image:'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600'
       

    },
    {
        id:'11',
        name:'Fried rice',
        price:'160',
        image:'https://images.pexels.com/photos/9980875/pexels-photo-9980875.jpeg?auto=compress&cs=tinysrgb&w=600'
       

    },
    {
        id:'12',
      name:'Juices',
      price:'850',
      image:'https://images.pexels.com/photos/452737/pexels-photo-452737.jpeg?auto=compress&cs=tinysrgb&w=600'
      

  }
    ]
}
  
  export default data;
  

// const data = {
//     products: [],
//   };
  
//   // Fetch data from the Open Food Facts API
//   async function fetchData() {
//     try {
//       const response = await fetch('https://world.openfoodfacts.org/api/v0/product/737628064502.json');
//       const result = await response.json();
  
//       // Extract relevant information from the API response and populate the products array
//       const productInfo = {
//         id: '13', // You can generate a unique ID for the new product
//         name: result.product.product_name,
//         price: '100', // You can set a default price or fetch it from another source
//         image: result.product.image_url,
//       };
  
//       data.products.push(productInfo);
  
//       // You can add more products or customize the data structure as needed
  
//       console.log('Data fetched successfully:', data.products);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
  
//   // Call the fetchData function to fetch data from the API
//   fetchData();
  
//   export default data;
  
