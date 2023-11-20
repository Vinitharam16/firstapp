import React from "react"
import ButtonComponent from '../Components/Buttons/Button';


export default function Home() {
    const [count,setCount] = React.useState(0);

    React.useEffect(()=>{
        return() => {
            window.confirm("Are you sure you want to leave the Home Page");
        }
    },[])
  
    return (
        <div>
            <ButtonComponent label="+" onClick={() => setCount(count + 1)} />
            <h1>{count}</h1>
            <ButtonComponent label="-" onClick={() => setCount(count - 1)} />
            <ButtonComponent  className="button" label="check" onClick={() => console.log("vinitha")}/>
        </div>
    )
}
