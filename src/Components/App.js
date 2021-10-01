import '../App.css';
import CustomerPage from './CustomerPage'
import FakeNav from './fake-nav'
import OrdersPage from './OrdersPage'
import InvoicePage from './InvoicePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <FakeNav />
        <Switch>
          <Route path="/invoices">
            <InvoicePage />
          </Route>
          <Route path="/orders">
            <OrdersPage />
          </Route>
          <Route path="/customers">
            <CustomerPage />
          </Route>
          <Route path="/">
            <CustomerPage />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
