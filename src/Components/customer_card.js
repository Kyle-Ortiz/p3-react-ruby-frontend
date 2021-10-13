import React from 'react'
import Button from 'react-bootstrap/Button'


function CustomerCard({customerName,customerEmail,customerPhone,customerDelete,customer}) {
     return (
          <div className="customer-card" key={customer.id}>
               <h4>{customerName}</h4>
               <p>{customerEmail}</p>
               <p>{customerPhone}</p>
               <div className="button-group">
                    <Button variant="outline-danger" className="card-buttons" onClick={() => customerDelete(customer.id)}>Remove</Button>
               </div>
          </div>

     )
}

export default CustomerCard
