import React from 'react'
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

//default Props
export const PropExample = ({myname="riddhi",myage="21"}) => {
  return (
    <div>
    <h3>Props Example</h3>
    <h4>Name is--{myname}</h4>
    <h4>Age is--{myage}</h4>
    </div>
  )
}
PropExample.PropTypes={
  myname:PropTypes.string.isRequired,
  myage:PropTypes.number.isRequired
}  
