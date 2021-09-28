import '../App.css';
import {useState, useEffect} from 'react'
import CustomerCard from './customer_card'


function App() {
  const [customerData, setCustomerData] = useState(null)
  useEffect(() => {
      fetch("http://localhost:9292/customers")
      .then((r) => r.json())
      .then((data) => {setCustomerData(data)})
      debugger
  }, [])

  const filledCustomerCards = customerData.map((customer)=> {
    <CustomerCard customerName={customer.name} customerEmail={customer.email} customerPhone={customer.phone}/>
  })
  return (
    <div className="App">
      <h1>Hey</h1>
      {filledCustomerCards}
    </div>
  );
}

export default App;
