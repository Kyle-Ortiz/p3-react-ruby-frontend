import React from 'react'
import {useState, useEffect} from 'react'
import InvoiceCard from './InvoiceCard'
import InvoiceForm from './InvoiceForm'
import Button from 'react-bootstrap/Button'
function InvoicePage() {
     const[InvoiceData, setInvoiceData] = useState([])
     const[updater,setUpdater] = useState(false)
     useEffect(() => {
          fetch("http://localhost:9292/invoices")
          .then((r) => r.json())
          .then((data) => {
            setInvoiceData(data);
            console.log(data);
          })
      }, [])

      function invoiceAdder() {
          setUpdater(!updater)
      }
     return (
          <div>
               <Button onClick={invoiceAdder}variant="warning"> {updater ? "Go Back" : "Create New Invoice"} </Button>
               {updater ? <InvoiceForm InvoiceData={InvoiceData} setInvoiceData={setInvoiceData}/> : <InvoiceCard InvoiceData={InvoiceData} setInvoiceData={setInvoiceData}/>}
          </div>
     )
}

export default InvoicePage
