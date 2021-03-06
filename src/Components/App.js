import '../App.css';
import CustomerPage from './CustomerPage'
import FakeNav from './fake-nav'
import OrdersPage from './OrdersPage'
import InvoicePage from './InvoicePage'
import {useState,useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [customerData, setCustomerData] = useState([])
  const [fetchChecker, setFetchChecker] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9292/customers")
    .then((r) => r.json())
    .then((data) => {
      setCustomerData(data);
      setFetchChecker(true);
      console.log(data);
    });
}, [])
  return (
    <Router>
      <div className="App">
        <FakeNav />
        <Switch>
          <Route path="/invoices">
            <InvoicePage />
          </Route>
          <Route path="/orders">
            {fetchChecker ? <OrdersPage customers={customerData} /> : "Loading.."}
          </Route>
          <Route path="/customers">
            <CustomerPage customerData={customerData} setCustomerData={setCustomerData}/>
          </Route>
          <Route path="/">
            <CustomerPage customerData={customerData} setCustomerData={setCustomerData}/>
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
