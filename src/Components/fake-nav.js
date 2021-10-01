import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

function FakeNav() {
     return (
          <div className="fake-nav">
               <h1>Order Manger</h1>
               <ButtonGroup >
                    <Button variant="primary">Orders</Button>
                    <Button variant="primary">Invoices</Button>
                    <Button variant="primary">Customers</Button>
               </ButtonGroup>
          </div>
     )
}

export default FakeNav
