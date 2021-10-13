import React from 'react'
import CustomerCard from './customer_card'
import {useState} from 'react'

function CustomerPage({customerData,setCustomerData}) {
     const [newCustomerName, setNewCustomerName] = useState("")
     const [newCustomerEmail, setNewCustomerEmail] = useState("")
     const [newCustomerPhone, setNewCustomerPhone] = useState("")

     const filledCustomerCards = customerData.map((customer)=> {
          return <CustomerCard key={customer.id} customerDelete={customerDelete} customer={customer} customerName={customer.full_name} customerEmail={customer.email} customerPhone={customer.phone_number}/>
        })

     function customerAdd(e) {
          e.preventDefault();
          fetch('http://localhost:9292/customers', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            full_name : newCustomerName,
            email : newCustomerEmail,
            phone_number : newCustomerPhone
          })
        }).then((r)=> r.json()).then((customer)=> setCustomerData([...customerData,customer]));
        //new customer adder functions, needs to be absracted?? 
        setNewCustomerName("");
        setNewCustomerEmail("");
        setNewCustomerPhone("");
        }
      
        function customerNameHandler(e) {
          setNewCustomerName(e.target.value)
        }
        function customerEmailHandler(e) {
          setNewCustomerEmail(e.target.value)
        }
        function customerPhoneHandler(e) {
          setNewCustomerPhone(e.target.value)
        }
      
        function customerDelete(id) {
          console.log(id)
          fetch (`http://localhost:9292/customers/${id}`,{
            method: 'DELETE', 
            headers: {
             'Content-type': 'application/json; charset=UTF-8' 
            },}).then((r)=> r.json()).then((deletedCustomer) => {
                 console.log(deletedCustomer);
                 const customerList = customerData.filter((customer)=> customer.id !== deletedCustomer.id);
                 console.log(customerList);
                 setCustomerData(customerList);
               })
        }

     return (
          <div>
            <form action="submit" onSubmit={customerAdd}>
                    <input type="text" placeholder="Full name" value={newCustomerName} onChange={customerNameHandler}/>
                    <input type="text" placeholder="Email" value={newCustomerEmail} onChange={customerEmailHandler}/>
                    <input type="text" placeholder="Phone Number" value={newCustomerPhone} onChange={customerPhoneHandler}/>
                    <button>New Customer</button>
            </form>
               {filledCustomerCards}
               
          </div>
     )
}

export default CustomerPage
