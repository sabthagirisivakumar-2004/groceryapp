import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Static product component
function Product({ name, price, image }) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
}

// Order history page
function OrderHistoryPage() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      date: '2023-12-25',
      items: [
        { productId: 1, quantity: 2 },
        { productId: 3, quantity: 1 },
      ],
      total: 59.98,
      status: 'Delivered',
    },
    {
      id: 2,
      date: '2023-12-30',
      items: [
        { productId: 2, quantity: 1 },
      ],
      total: 29.99,
      status: 'Processing',
    },
  ]);

  const products = [
    { id: 1, name: 'Product A', price: 19.99, image: 'https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img21/Grocery/GroceryNewLook/grocery_sbc_coffee_440x460.jpg' },
    { id: 2, name: 'Product B', price: 29.99, image: 'https://www.jiomart.com/images/product/original/rvjqakhvob/a-one-grocery-chocolate-cone-tasty-crunchy-wafer-rolls-500-g-product-images-orvjqakhvob-p604200978-0-202308300052.jpg?im=Resize=(420,420)' },

  ];
  const navigate=useNavigate();
  const handle = () =>{
    navigate('/home');
  } 
  return (
    <div>
      <h1>Order History</h1><button onClick={handle} style={{position:'absolute',top:"15px",left:"1450px"}}>Home</button>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th><span style={{position:'absolute',left:"220px"}}>Date</span></th>
            <th><span style={{position:'absolute',left:"460px"}}>Total</span></th>
            <th><span style={{position:'absolute',left:"620px"}}>Status</span></th>
            <th><span style={{position:'absolute',left:"1100px"}}>Items</span></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td ><span style={{position:'absolute'}}>{order.id}</span></td>
              <td><span style={{position:'absolute',left:"200px"}}>{order.date}</span></td>
              <td><span style={{position:'absolute',left:"450px"}}>${order.total}</span></td>
              <td ><span style={{position:'absolute',left:"600px"}}>{order.status}</span></td>
              <td >
              <div style={{marginLeft:"700px"}}>
                {order.items.map((item) => (
                  <Product 
                    key={item.productId}
                    {...products.find((p) => p.id === item.productId)}
                  />
                ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderHistoryPage;
