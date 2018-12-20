import React from 'react';
import styled from 'styled-components'

const Details = props => (
  <div>
    <span>Cost estimation: {props.amount}</span>
    <p>{`a= ${props.positionA}, b=${props.positionB}, c=${props.positionC}, d=${props.positionD}`}
  </div>
);
