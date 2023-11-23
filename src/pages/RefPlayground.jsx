import React, { useRef } from "react"

export default function RefPlayground() {
    const clrref = React.useRef(null);

    function handlecolorchange(color, backgroundcolor){
        clrref.current.style.color = color;
        clrref.current.style.backgroundColor = backgroundcolor;
        }
    return (
        <div>
            <p ref={clrref}>My name is vinitha</p>
            <button onClick={()=> handlecolorchange("red", "black")}>Red</button>
            <button onClick={()=> handlecolorchange("yellow", "green")}>Yellow</button>
            <button onClick={()=> handlecolorchange("green", "pink")}>Green</button>
        </div>

    )
}

