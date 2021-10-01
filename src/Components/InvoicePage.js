import React from 'react'
import {useState, useEffect} from 'react'
function InvoicePage() {
     const[InvoiceData, setInvoiceData] = useState([])
     useEffect(() => {
          fetch("http://localhost:9292/invoices")
          .then((r) => r.json())
          .then((data) => {
            setInvoiceData(data);
            console.log(data);
          })
      }, [])
     return (
          <div>
               hello there
          </div>
     )
}

export default InvoicePage
