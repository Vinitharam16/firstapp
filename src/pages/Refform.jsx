import React, { useEffect, useRef } from "react"

export default function Refform() {
  const firstName = React.useRef(null);
  const lastName = React.useRef(null);
  const Phonenumber = React.useRef(null);

  useEffect(() => {
    lastName.current.focus();

  },[])
    return (
        <div>
            <div>
                <input ref={firstName} />
            </div>
            <div>
                <input ref={lastName} />
            </div>
            <div>
                <input ref={Phonenumber} />
            </div>

            <button onClick={() => {
                console.log(firstName.current.value);
                console.log(lastName.current.value);
                console.log(Phonenumber.current.value);
            }}>submit</button>

        </div>

    )
}