import React from 'react'
import {useState, useEffect} from 'react'

function OrdersPage(props) {
     const[ordersData, setOrdersData] = useState([])
     useEffect(() => {
          fetch("http://localhost:9292/orders")
          .then((r) => r.json())
          .then((data) => {
            setOrdersData(data);
            console.log(data);
          })
      }, [])

      const locations = ["","back","left arm", "right arm","front"];
      const status = ["","Ready to print","Printing","Completed","Shipped","Delivered"];
      const filledOrderCards = ordersData.map((order)=> {
          return <div key={order.id}>
                    <h4>Order #{order.id}</h4>
                    <p>This order is for: {}</p>
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

export default OrdersPage

