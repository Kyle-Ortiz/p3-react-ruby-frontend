Phase-3-react-frontend-order-manager
  This basic fronted is for use with p3-ruby-backend. It consists of an extremely basic UI using react router and a touch of react-bootsrap for easy styling.
  
 Overview
  This fontend is broken into three main tabs for the representation of the paths created on the backend relating to the Order,Customer, and Invoice classes. 
  The front page is defaulted to customer's page, displaying all customers that are in your database and their relevant contact information. This is to set up the     user to quickly make an addition of a customer when getting new business before adding orders for a customer that is not in the databse. At the top of this page 
  you have a small form to add Customers to the page. This form make a request, with an object consisting of the form data to the create route in my sinatra
  backend. It will then update state for the frontend and add the customer to the list of current customers. Each customer also has a remove button on their contact
  info cards to be able to easily remove them from the page and the database if they no longer want to do business. 
  
  The following pages/tabs of Orders and Invoices have the same general function. They contain a form to add new ones, and they display relevant information to the 
  business for completing an order such as shirt size and color. The option to delete invoices is not given, because I felt it would be good to keep invoices of all
  orders(cancelled or not) for good record keeping. 
  
  
