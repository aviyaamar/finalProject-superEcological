import Home from '../../pages/Home/Home'
import React, { useEffect, useState } from "react";

import Api from '../../Api/Api'
import "./map.css";
import e from 'cors';

export default function Map() {
  const [result, setResult]= useState([])
  const [input, setInput]= useState('')


  useEffect(() => {
      const search  = async() =>{
          const {data} = await Api.get('points')
          setResult(data)

      }
      search()
   },[])

   const filter = () =>{
      return  result.filter((country) =>country.name.toLowerCase().includes(input))
   }

   const renderData = () =>{
       const countries =  filter()
       return countries.map((country)=>{
           return (<button onClick={ifComing()} key={country.numericCode}>{country.name} </ button>)
       })
   }
const ifComing = () =>{
  const countries =  filter()
  countries.map((item)=>{
 {item.isComing === false? ( <div>sorry we are not coming</div>):(<div>Yooo we are  coming to you</div>)}
 
  })
}
    return(
       <div>
         <Home/>
           <label>Search Country</label>  
           <input
           type="text"
           value={input}
           onChange={(e) => setInput(e.target.value)}/>
           <ul>{renderData()}</ul>
       </div>
   )
}