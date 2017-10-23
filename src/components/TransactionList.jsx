import React from 'react'
import {Table} from 'semantic-ui-react'

const TransactionList = (props) => {
  return (
    <div>
     <Table fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Hash</Table.HeaderCell>
          <Table.HeaderCell>Time stamp</Table.HeaderCell>
          <Table.HeaderCell>From</Table.HeaderCell>
          <Table.HeaderCell>To</Table.HeaderCell>
          <Table.HeaderCell>Value</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {
      props.transactions.map((transaction, index) => (
      <Table.Body>
        <Table.Row >
          <Table.Cell>{transaction.hash}</Table.Cell>
          <Table.Cell>
            {
              new Date(parseInt(transaction.timeStamp)).toDateString()
            
            }
          </Table.Cell>
          <Table.Cell>{transaction.from}</Table.Cell>
          <Table.Cell>{transaction.to}</Table.Cell>
          <Table.Cell>{transaction.value}</Table.Cell>
        </Table.Row>
      </Table.Body>
    )
      )
    }
     </Table>
    
  </div>  
  )  
}
export default TransactionList