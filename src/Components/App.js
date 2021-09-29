import '../App.css';
import {useState, useEffect} from 'react'
import CustomerCard from './customer_card'


function App() {
  const [customerData, setCustomerData] = useState([])
  const [newCustomerName, setNewCustomerName] = useState("")
  const [newCustomerEmail, setNewCustomerEmail] = useState("")
  const [newCustomerPhone, setNewCustomerPhone] = useState("")
  const [newCustomerObj,setNewCustomerObj] = useState({
    full_name : '',
    email : '',
    phone_number : '',
  })

  useEffect(() => {
      fetch("http://localhost:9292/customers")
      .then((r) => r.json())
      .then((data) => {
        setCustomerData(data);
        console.log(customerData);
      })
  }, [])

  const filledCustomerCards = customerData.map((customer)=> {
    return <CustomerCard customerName={customer.full_name} customerEmail={customer.email} customerPhone={customer.phone_number}/>
  })

  function customerAdd(e) {
    e.preventDefault();
    console.log(e.target)
    fetch('http://localhost:9292/customers', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
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

  return (
    <div className="App">
      <h1>Order Manger</h1>
      {filledCustomerCards}
      <form action="submit" onSubmit={customerAdd}>
        <input type="text" placeholder="Full name" value={newCustomerName} onChange={customerNameHandler}/>
        <input type="text" placeholder="Email" value={newCustomerEmail} onChange={customerEmailHandler}/>
        <input type="text" placeholder="Phone Number" value={newCustomerPhone} onChange={customerPhoneHandler}/>
        <button className="add-customer">New Customer</button>
      </form>
      
    </div>
  );
}

export default App;
