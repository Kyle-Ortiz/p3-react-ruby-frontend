import React from 'react';
import {useState, useEffect} from 'react';
import OrderCards from './order_cards';
import Button from 'react-bootstrap/Button';

function OrdersPage({customers}) {
     const[ordersData, setOrdersData] = useState([]);
     const [fetcher, setFetcher] = useState(false);
     const [formStyle, setFormStyle] = useState("");
     const [formColor, setFormColor] = useState("");
     const [formDue, setFormDue] = useState("");
     const [formPrintColor, setFormPrintColor] = useState("");
     const [formPrintLocation, setFormPrintLocation] = useState("");
     const [formQuantity, setFormQuantity] = useState("");
     const [formCustomerId, setFormCustomerId] = useState("");

     
      useEffect(() => {
          fetch("http://localhost:9292/orders")
          .then((r) => r.json())
          .then((data) => {
            setOrdersData(data)
            setFetcher(true);
            console.log(data);
          });
      },[]);

     function orderToDatabase(e) {
          e.preventDefault()
          const newOrder = {
               style_number: formStyle,
               color: formColor,
               due_date: formDue,
               print_color: formPrintColor,
               print_location: formPrintLocation,
               quantity: formQuantity,
               customer_id: formCustomerId,
               order_status: "1",
          }
          console.log(newOrder)
          fetch('http://localhost:9292/orders', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newOrder)
        }).then((r)=> r.json()).then((order)=> setOrdersData([...ordersData,order]));
        
        setFormStyle("");
        setFormColor("");
        setFormDue("");
        setFormPrintLocation("");
        setFormPrintColor("");
        setFormQuantity("");
        setFormCustomerId("");
     }
      
     return (
          <div>
               <form action="submit" onSubmit={(e)=> orderToDatabase(e)}>
                    <input type="text" placeholder="Style# ex. '123456'"value={formStyle} onChange={(e)=> setFormStyle(e.target.value)}/>
                    <input type="text" placeholder="Shirt Color" value={formColor} onChange={(e)=> setFormColor(e.target.value)}/>
                    <input type="text" placeholder="Due Date 'YYY-MM-DD'" value={formDue} onChange={(e)=> setFormDue(e.target.value)}/>
                    <input type="text" placeholder="Color of Print" value={formPrintColor} onChange={(e)=> setFormPrintColor(e.target.value)}/>
                    <input type="text" placeholder="ID # of location 1-4" value={formPrintLocation} onChange={(e)=> setFormPrintLocation(e.target.value)}/>
                    <input type="text" placeholder="# of Shirts" value={formQuantity} onChange={(e)=> setFormQuantity(e.target.value)}/>
                    <input type="text" placeholder="# ID for customer" value={formCustomerId} onChange={(e)=> setFormCustomerId(e.target.value)}/>
                    <Button type="submit" variant="success">Create New Order</Button>
               </form>
               {fetcher ? <OrderCards ordersData={ordersData} setOrdersData={setOrdersData} customers={customers} /> : "Loading..."}
          </div>
     )
}

export default OrdersPage

