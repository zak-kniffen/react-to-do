import React from 'react';


const Box = (props) => (
  <li style={{marginTop:"5%", marginBottom:"5%", color: "yellow", fontSize: 24, backgroundColor: "green", borderRadius: "25%"}}>
    The number is: {props.value}
  </li>
);

export default Box;
