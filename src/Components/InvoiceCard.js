import React from 'react'

function InvoiceCard({InvoiceData}) {
     const Invoices = InvoiceData.map((invoice)=> {
           return (<div>
                    <h4>Invoice for Order #: {invoice.order_id}</h4>
                    <p>Payment requred by: {invoice.due_by}</p>
                    <p>${invoice.price}.00</p>
                    <p>Payment Status(true or false): {invoice.payment_status.toUpperCase()}</p>
               </div>)
     })
     return (
          <div>
              {Invoices} 
          </div>
     )
}

export default InvoiceCard
