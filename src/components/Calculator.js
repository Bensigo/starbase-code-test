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
           disabled 
           value={props.toBTC}
           labelPosition='right'
         >
         <input/>
         <Label  color="red">BTC</Label>
         </Form.Input>
        
         <Form.Input 
           disabled 
           value={props.toUSD}
           labelPosition='right'
         >
         <input/>
         <Label  color="red">USD</Label>
         </Form.Input>
         
     </Form.Group>
   </Form>
  )
}

export default Calulator
