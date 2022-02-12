import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUserId, getOrderByIdReducer } from "../actions/orderActions";
import Loader from "../component/Loading/Loading";
import Error from '../component/Error/Error'
import Home from '../pages/Home/Home'
import {RiTruckLine  } from "react-icons/ri";
// import { Link } from "react-router-dom";
import './order.css'

const Order =()=>{

  const orderstate=useSelector(state=>state.getOrdersByUserIdReducer)


 const {orders , error , loading} = orderstate
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      dispatch(getOrdersByUserId());
      console.log(orders);
    } else {
      window.location.href = "/login";
    }
  }, [dispatch]);



  return (
    <div>
      <Home/>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <h2 className="text-center-h2">MY ORDERS <RiTruckLine className="icon"/></h2>
         
       <div className="tableDiv">
          <table className="tableOrder">
            <thead>
                <th>Order ID</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Transaction ID</th>
                <th>Status</th>
            </thead>
            </table>
            </div>
                {loading && (<Loader/>)}
                  {orders && (orders.map(order=>{
                     return (<div key={order._id} className="boxOroder">
                      <button className="btn-name" onClick={()=>{window.location=`/orderinfo/${order._id}`}} >YOUR ORDER</button>
                    <div className="orderbox">
                    <h5> {order._id}</h5> 
                     <h5>{order.orderAmount}</h5>
                     <h5>{order.createdAt.substring(0,10)} </h5>
                     <h5> {order.transactionId}</h5> 
                     <div className="status">
                     <h5> {order.isDelivered ? (<li>Delivered</li>) : (<li>Order Placed</li>)}</h5></div>   </div>
                     <hr></hr>
                     <div className="imageOrderFlex">{order.orderItems.map((item)=>{
                         return(<div key={item._id}><img className="imageOrder" src={item.image}/>
                       
                         </div>)})}
                         
                      </div>
                 
                   </div>)
                    }))}
                 
                    
                  {error && (<Error error='something went wrong'/>)}
      
      </div>
    </div>
    </div>
  );
}

export default Order;