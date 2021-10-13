import React from 'react';
import {useState, useEffect} from 'react';
import OrderCards from './order_cards'

function OrdersPage({customers}) {
     const[ordersData, setOrdersData] = useState([]);
     const [fetcher, setFetcher] = useState(false);
     
     useEffect(() => {
          fetch("http://localhost:9292/orders")
          .then((r) => r.json())
          .then((data) => {
            setOrdersData(data);
            setFetcher(true);
            console.log(data);
          });
      }, [])
      
     return (
          <div>
               {fetcher ? <OrderCards ordersData={ordersData} setOrdersData={setOrdersData} customers={customers} /> : "Loading..."}
          </div>
     )
}

export default OrdersPage

