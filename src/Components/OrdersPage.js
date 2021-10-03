import React from 'react';
import {useState, useEffect} from 'react';
import OrderCards from './order_cards'

function OrdersPage({customers}) {
     const[ordersData, setOrdersData] = useState([]);
     
     useEffect(() => {
          fetch("http://localhost:9292/orders")
          .then((r) => r.json())
          .then((data) => {
            setOrdersData(data);
            console.log(data);
          });
      }, [])
      
     return (
          <div>
               <OrderCards ordersData={ordersData} setOrdersData={setOrdersData} customers={customers} />
          </div>
     )
}

export default OrdersPage

