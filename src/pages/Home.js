import React, { Component } from 'react';
import "./styles.css"
import { Button,  Menu ,Container,Segment,Form,Checkbox,Table,Grid, GridColumn} from 'semantic-ui-react';

export default function Home() {
  return (
 
    <Container>
        <Segment>
        
      <Table>
     
   
     <Table.Body>
       <Table.Row>
       <Table.Cell width={10}>
   <img src="/MCCG3.jpg" alt='gallerynew' width={350}/>
   </Table.Cell>
  
   <Table.Cell>
     <h1>Login</h1>
   <Form widths='5'>
   <Form.Field>
       <label> Name</label>
       <input placeholder=' Name' />
       We'll never share your email with anyone else.
     </Form.Field>
     <Form.Field>
       <label>Password</label>
       <input placeholder='Password' />
       </Form.Field>
     <Form.Input>
       <Checkbox label='I agree to the Terms and Conditions' />
       </Form.Input>
  
     <Button  type='submit'   color='blue'>Submit</Button>
   </Form>
   </Table.Cell>
   </Table.Row>
   </Table.Body>
   </Table>
  
   
      </Segment>
      </Container>
  )
    }

