import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import {useHistory} from 'react-router-dom'

function FakeNav() {

     const history = useHistory();

     return (
          <div className="fake-nav">
               <h1>Order Manger</h1>
               <ButtonGroup >
                    <Button variant="primary" onClick={() => history.push('/orders')}>Orders</Button>
                    <Button variant="primary" onClick={() => history.push('/invoices')}>Invoices</Button>
                    <Button variant="primary" onClick={() => history.push('/')}>Customers</Button>
               </ButtonGroup>
          </div>
     )
}

export default FakeNav
