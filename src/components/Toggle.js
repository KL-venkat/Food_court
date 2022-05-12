import React  from 'react';  
import {Button,Header} from 'semantic-ui-react';
class Togglingstate extends React.Component
{  
     constructor(props)
      {  
        super(props);        
        this.state = {
            displayBio: 'info'
        };  
        //console.log('Component this', this);  
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);    //this states to toggle 
      }  
      toggleDisplayBio()
       {  
          this.setState({displayBio: !this.state.displayBio});  
        }  
     
      render()
       {  
          return (  
              <div>  
                  <Header as='h1' color='blue'>To know more about us!</Header>  
                  {  
                      this.state.displayBio ? (   
                          <div>  
                              <p><h4>Food Court is an Indian online food ordering and delivery platform. Founded in July 2014,FC is based in Bangalore(66), and operates in 500 Indian cities, as of September 2021.
                                  We always strive to come up with  best quality,Have a great day :) </h4></p>  
                              <Button secondary onClick={this.toggleDisplayBio}> Show Less </Button>  
                        </div>  
                          ) : (                                                                  //by using ternary operator
                              <div>  
                                  <Button basic color='green' onClick={this.toggleDisplayBio}> Read More </Button>  
                              </div>  
                          )  
                  }  
             </div>  
        )  
    }  
}  
export default Togglingstate;   