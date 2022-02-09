import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../actions/orderActions";
import Loader from "../component/Loading/Loading";
import Error from '../component/Error/Error'
import Home from "./Home/Home";
import './orderinfo.css';

import {FaRegAddressCard} from "react-icons/fa";
import {FaCity} from "react-icons/fa";
import {ImAirplane} from "react-icons/im";
export default function Orderinfo({ match }) {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getOrderByIdReducer);

  const { order, loading, error } = orderstate;

  useEffect(() => {
    dispatch(getOrderById(match.params.orderid));
  }, [dispatch]);
  return (
    <div>
      <Home/>
      {error && (<Error error="Something went wrong" />)}
      {loading && (<Loader/>)}
      {order && (
        <div>
          <div className="row justify-content-center">
          <h2 className="text-center-h2">ORDER DETATILS</h2>
            <div className="card">
              <div className="half-card">
              {order.orderItems.map((item) => {
                return (
                  <div className="cardDetails">
                 
                    <h4>{item.name}</h4>
                    <img style={{ 'width': '100px', 'height': '100px'}}src={item.image}/>
                    <h4> Quantity : <b>{item.quantity}</b></h4>
                    <h4>Price : {item.quantity} * {item.price} ={" "}{item.price * item.quantity}  </h4>
               
              
                  </div>
                );
              
              })}
              </div>
           
              <div className="text-right">
                <div className="cardShipping">
                <h2 className="text-center-h2 shipe"> SHIPPING DETAILS </h2>
                <h2 className="">  <FaRegAddressCard className="icon ship"/> <span>:{order.shippingAddress.address}</span> </h2>
                <h2 className=""> <FaCity className="icon ship"/>   <span>:{order.shippingAddress.city}</span></h2>
                <h2 className=""><ImAirplane className="icon ship"/> <span>: {order.shippingAddress.country}</span>   </h2>
                </div>
              </div>
              </div>

              {/* <div className="">
              <h2>Order Details</h2>
              <h3>Order Id : {order._id}</h3>
              <h3>Total Amount : {order.orderAmount}</h3>
              <h3>Date Of order : {order.createdAt.substring(0, 10)}</h3>
              <h3>Transaction ID : {order.transactionId}</h3> */}

              {order.isDelivered ? (
                <h3>Order Delivered</h3>
              ) : (
                <h3>Order Placed</h3>
              )}
            </div>
          </div>
        // </div>
      )}






      {/* <hr /> */}

      {/* <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 className="text-left">Replacement Conditions</h2>
          <p>
            A free replacement cannot be created for an item which was returned
            and replaced once earlier. If your item is not eligible for free
            replacement due to any reason, you can always return it for a
            refund. If the item has missing parts or accessories, you may try to
            contact the manufacturer for assistance. Manufacturer contact
            information can usually be found on the item packaging or in the
            paperwork included with the item.
          </p>
        </div> */}
      </div>
    // </div>
  );
}