import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listMyOrders, deleteOrder } from '../actions/orderActions';
import dateFormater from '../auxFunctions/date-formater'
import SneakerOrder from './SneakerOrdered'

function OrdersPage(props) {
  const myOrderList = useSelector(state => state.myOrderList);
  console.log("this is order list",myOrderList)
  const { loading, orders, error } = myOrderList;



  const dispatch = useDispatch();

  let index =  props.match.params.id;
  console.log("this is index",index);
  console.log("this is orders",orders);



  useEffect(() => {
    dispatch(listMyOrders(index));
    return () => {
    };
  }, []);

  const deleteHandler = (order) => {
    dispatch(deleteOrder(order.id));
  }
  return loading ? <div>Loading...</div> :
    <div className="content content-margined">

      <div className="order-header">
        <h3>Your order's records</h3>
      </div>
      <div className="order-list">

        <table className="table">
          <thead>
            <tr>
              <th>INVOICE ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>SNEAKER IDS</th>
              <th>PAID VIA</th>

            </tr>
          </thead>
          <tbody>
            {orders.map(order => (<tr key={order._id}>
              <td>{order.id}</td>
              <td>{dateFormater(order.createdAt)}</td>
              <td >${order.totalPrice}</td>
              <td>{<SneakerOrder props={order.arrayIds}/>}</td>
              <td>{order.paymentDetails}</td>
              {/* <td>{order.isDelivered.toString()}</td>
              <td>{order.deliveredAt}</td> */}

            </tr>))}
          </tbody>
        </table>

      </div>
    </div>
}
export default OrdersPage;
