import { useState, useEffect } from "react";
import { Modal,Button,Header, Input} from "semantic-ui-react";
import React from "react";



function Start() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [open, setOpen] = React.useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors,formValues,isSubmit]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (

    <Modal size="small"
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<Button as='h1' >Login</Button>}
  >
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        // <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        <div> </div>
      )}

      <form onSubmit={handleSubmit}>
        <Header as='h1' size="huge">Login</Header>
        {/* <div className="ui divider"></div> */}
        <br/>
        <div className="ui form">
         
           <fieldset>
            <label>User name</label> 
            <Input
              class="ui focus input"
              className="login-creds"
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
         
          <p>{formErrors.username}</p>
          
            <label>Email</label>
            <Input
              className="login-creds"
              class="ui focus input"
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
        
          <p>{formErrors.email}</p>
         
            <label>Password</label>
            <Input
              class="ui focus input"
              className="login-creds"
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            </fieldset>
         
          <p>{formErrors.password}</p>
          <button  className="fluid ui button blue">Submit</button>
          <Modal.Actions>
          {/* <button className="fluid ui button blue">Submit</button> */}
          <Button
          
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
          ></Button>
          </Modal.Actions>
          {/* <button className="fluid ui button blue">Submit</button> */}
          
        </div>
      </form>
    </div>
    
    </Modal>
  );
}

export default Start;



