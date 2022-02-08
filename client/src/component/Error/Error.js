import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import './Error.css'

const Error = ({ error }) => {
  const  circle = <FontAwesomeIcon icon={faTimesCircle}/>
  return(
      <div className='error-msg'>
       <i className="fa fa-times-circle">{circle}</i>
        {error}
     this is error message
  </div>
  );
};

export default Error;
