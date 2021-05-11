import React, { useState } from 'react'

export default function CounterFunction() {
  const [ value, setValue ] = useState(0);
  // const [ username, setUsername ] = useState("");
  // const [ fields, setFields ] = useState({
  //   username: "",
  //   password: ""
  // })

  const add = () => setValue(value + 1);
  const substract = () => setValue(value - 1);

  return (
    <div>
      <button onClick={() => substract()}>Substract</button>
      {value}
      <button onClick={() => add()}>Add</button>
    </div>
  )
}
