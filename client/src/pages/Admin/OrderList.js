import React from 'react';
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../component/Loading/Loading'
import Error from '../../component/Error/Error'
import Succes from '../../component/Error/Succes'
import { getAllOrders } from '../../actions/orderActions'
import { AiOutlineUnorderedList } from "react-icons/ai";
import Home from '../Home/Home';

const OrderList = () => {
  const getordersstate = useSelector(state => state.getAllOrdersReducer)

    const {loading , error , orders} = getordersstate
    const dispatch = useDispatch()

    useEffect(() => {

       dispatch(getAllOrders())
        
    }, [])
  return (
  <div>
      <Home/>
     <div>
            {loading && (<Loader/>)}
            {error && (<Error error='something went wrong'/>)}
            <h2 className='text-center-h2'>ORDER LIST <span><AiOutlineUnorderedList/></span></h2>
            <table className=''>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Email</th>
                        <th>User Id</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Transaction Id</th>
                    </tr>
                    </thead>

                    <tbody>
                        {orders && (orders.map(order=>{
                            return <tr className=''  key={order._id}onClick={()=>{window.location.href=`/orderinfo/${order._id}`}}>
                                <td>{order._id}</td>
                                
                                <td>{order.orderItems.map((item)=>{
                                    <td>{item.name}</td>
                                })}</td>
                                <td>{order.userid}</td>
                                <td>{order.orderAmount}</td>
                                <td>{order.createdAt}</td>
                                <td>{order.transactionId}</td>
                            </tr>
                        }))}
                    </tbody>
                    {/* <div>
                        {orders.orderItems.map((order)=>{
                            <li>{order.name}</li>

                        })}
                    </div> */}
               
            </table>

        </div>
  </div>);
};

export default OrderList;
