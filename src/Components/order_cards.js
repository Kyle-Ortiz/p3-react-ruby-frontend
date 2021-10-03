import React from 'react'

function OrderCards({ordersData,setOrdersData,customers}) {
     const locations = ["","back","left arm", "right arm","front"];
     const status = ["","Ready to print","Printing","Completed","Shipped","Delivered"];
     const filledOrderCards = ordersData.map((order)=> {
          const orderCustomer = customers.find((customer)=> customer.id === order.customer_id)
          const customerName = orderCustomer.full_name
          return <div key={order.id}>
                    <h4>Order #{order.id}</h4>
                    <p>This order is for: {customerName}</p>
                    <p>Shirt Color: {order.color}</p>
                    <p>Print Color: {order.print_color}</p>
                    <p>Print Location: {locations[order.print_location]}</p>
                    <p>Order Due by: {order.due_date}</p>
                    <p>Order Status: {status[order.order_status].toUpperCase()}</p>
               </div>
        })
     return (
          <div>
               {filledOrderCards}
          </div>
     )
}

export default OrderCards
