import React from 'react';


const Box = (props) => (
  <li style={{marginTop:"5%", marginBottom:"5%", color: "yellow", fontSize: 24 }}>
    {props.name}, {props.list[0].name}
  </li>
);

export default Box;
