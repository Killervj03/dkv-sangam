import { Button,  Menu ,Container,Item,Image,Table,Input,Grid} from 'semantic-ui-react'
import React from 'react'
import '../index.css'

export default function Member() {

  return (
  
  <div>
  <h1><center> Member List </center></h1>
  

  <segment>

<Button Align ='right'  color='green'>Add new</Button>

<Input
      action={{ color: 'blue', content: 'Search' }}
      icon='search'
      iconPosition='left'
      placeholder='Search #'
    />


<Table celled  selectable>
    <Table.Header >
      <Table.Row>
        <Table.HeaderCell>Member:ID</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Mobile:No</Table.HeaderCell>
        <Table.HeaderCell>Membership:plan</Table.HeaderCell>
        <Table.HeaderCell>DATE:join</Table.HeaderCell>
        <Table.HeaderCell>Address     :</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'> <i class="edit icon"></i>
      <i class="trash icon"></i></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'> <i class="edit icon"></i>
      <i class="trash icon"></i></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      
      <Table.Cell textAlign='left'> <i class="edit icon"></i>
      <i class="trash icon"></i></Table.Cell> 
      </Table.Row>

      <Table.Row>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'> <i class="edit icon"></i>
      <i class="trash icon"></i></Table.Cell>
      </Table.Row>

      <Table.Row>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'> <i class="edit icon"></i>
      <i class="trash icon"></i></Table.Cell>
      </Table.Row>

      <Table.Row>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'> <i class="edit icon"></i>
      <i class="trash icon"></i></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'> <i class="edit icon"></i>
      <i class="trash icon"></i></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      
      <Table.Cell textAlign='left'> <i class="edit icon"></i>
      <i class="trash icon"></i></Table.Cell> 
      </Table.Row>

      <Table.Row>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'> <i class="edit icon"></i>
      <i class="trash icon"></i></Table.Cell>
      </Table.Row>

      <Table.Row>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'>None</Table.Cell>
      <Table.Cell textAlign='left'> <i class="edit icon"></i>
      <i class="trash icon"></i></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>


 

</segment></div>
  )
}
