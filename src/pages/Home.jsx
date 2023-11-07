import React from "react"
import ButtonComponent from './Components/Buttons/Button';


export default function Home() {
    const [count,setCount] = React.useState(0);

    React.useEffect(()=>{
      console.log(`current x value is ${count}`)
    },[count])
  
    return (
        <div>
            <ButtonComponent label="+" onClick={() => setCount(count + 1)} />
            <h1>{count}</h1>
            <ButtonComponent label="-" onClick={() => setCount(count - 1)} />
        </div>
    )
}
