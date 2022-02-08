import React from 'react';
import './Error.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

const Success = ({ success }) => {

  const  check = <FontAwesomeIcon icon={faCheck}/>
  return(
      <div className='success-msg'>
   <i className="fa fa-check">{check}</i>
        {success}
        this is suceess message
  </div>
  );
};

export default Success;