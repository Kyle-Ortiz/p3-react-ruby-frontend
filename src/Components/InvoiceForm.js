import React from 'react'
import Button from 'react-bootstrap/Button'
import {useState} from 'react'

function InvoiceForm({InvoiceData,setInvoiceData}) {
     const[orderId,setOrderId]=useState("");
     const[price,setPrice]=useState("");
     const[date,setDate]=useState("");
     const[status,setStatus]=useState("");
     const[quantity,setQuantity]=useState("");

     function invoiceToDatabase(e) {
          e.preventDefault()
          const newInvoice = {
               order_id: orderId,
               price: price,
               due_by: date,
               payment_status: status,
               quantity: quantity,
          }
          console.log(newInvoice)
          fetch('http://localhost:9292/invoice', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newInvoice)
        }).then((r)=> r.json()).then((invoice)=> setInvoiceData([...InvoiceData,invoice]));
        
        setOrderId("");
        setPrice("");
        setDate("");
        setStatus("");
        setQuantity("");
     }
     return (
          <form type="submit" onSubmit={(e)=> invoiceToDatabase(e)}>
               <input type="text" placeholder="Order # for this invoice" value={orderId} onChange={(e)=> setOrderId(e.target.value)}/>
               <input type="text" placeholder="Cost of Order(Whole Number)" value={price} onChange={(e)=> setPrice(e.target.value)}/>
               <input type="text" placeholder="Due Date ('YYYY-MM-DD')" value={date} onChange={(e)=> setDate(e.target.value)}/>
               <input type="text" placeholder="Payment Status(True or False)" value={status} onChange={(e)=> setStatus(e.target.value)}/>
               <input type="text" placeholder="Quantity of Shirts" value={quantity} onChange={(e)=> setQuantity(e.target.value)}/>
               <Button type="submit" variant="success">Add Invoice</Button>
          </form>
     )
}

export default InvoiceForm
