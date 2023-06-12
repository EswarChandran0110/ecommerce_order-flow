import React from 'react';
import { useSelector } from 'react-redux';

const History = () => {
  const orderHistory = useSelector(state => state.orderHistory);

  return (
    <>
      {/* <h2>History Page</h2> */}
      {orderHistory.length === 0 ? (
        <p>No order history available.</p>
      ) : (
        <ul>
          {orderHistory.map((order, index) => (
            <li key={index}>
              <h3>Order {index + 1}</h3>
              <p>Items: {order.items.map(item => item.name).join(', ')}</p>
              <p>Total: {order.items.length}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default History;