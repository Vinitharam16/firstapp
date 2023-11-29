import React from "react";
import { useParams } from "react-router-dom";

export default function Groceries(){
    const{ type = ''} = useParams();
    return(
        <div className="container-fluid" style={{background: type === "oil" ? "pink" : "red", color: "green"}}>
          {type}
        </div>
    )
}