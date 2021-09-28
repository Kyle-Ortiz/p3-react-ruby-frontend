import React from 'react'


function CustomerCard({customerName,customerEmail,customerPhone}) {
     return (
          <div className="customer-card">
               <h1>{customerName}</h1>
               <h3>{customerEmail}</h3>
               <h3>{customerPhone}</h3>
          </div>

     )
}

export default CustomerCard
