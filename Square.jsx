import React from "react";

const Square = (props) => {
    return(
        <div 
        onClick={props.onClick}
        style={{
            backgroundColor:"rgb(120,212,120",
            height:"100px",
            width:"100px",
            bordercolor:"black",
            display:"flex",
            border:"1px solid",
            textAlign:"center",
            alignItems:"center",
            justifyContent:"center",
            font:"5px"
        }} 
        className="square">
            <h5>{props.value}</h5>
        </div>
    );
};

export default Square;