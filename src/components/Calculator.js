import React from 'react'
import {Form, Label} from 'semantic-ui-react'

const Calulator = (props) => {

  return (
    <Form >
    {/**
      * convert the ether price to btc and usd
      */}
     <Form.Input
       type="text"
       labelPosition='right'
       onChange={(e) => {props.handleChange(e)}} 
       value={props.ETH}
      >
         <input/>
         <Label color="teal">ETH</Label>
     </Form.Input>
    
     <Form.Group widths='equal'>
         <Form.Input 
           type="text"
           value={props.toBTC}
           labelPosition='right'
         >
         <input/>
         <Label  color="blue">BTC</Label>
         </Form.Input>
        
         <Form.Input 
            
           style= {inputStyle}
           value={props.toUSD}
           labelPosition='right'
         >
         <input/>
         <Label  color="blue">USD</Label>
         </Form.Input>
         
     </Form.Group>
   </Form>
  )
}

const inputStyle = {
  color: 'red',
  type: 'disabled'
}
export default Calulator
