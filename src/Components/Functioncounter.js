import React, { useState } from "react";

function Functioncounter() {
  const [intialstate, setIntialstate] = useState(0);
  const handleOnIncrement=()=>{
    setIntialstate(intialstate+1)
  }
  const handleOnDecrement=()=>{
     if (intialstate > 0) {
      setIntialstate(intialstate - 1);
    }
  }
  return (
    <div className="functionCounter">
        <h1 className="heading">This is Function Counter</h1>
      <h1 className="counter">{intialstate}</h1>
      <button className="sub" onClick={handleOnDecrement}>-</button>
      <button className="add" onClick={handleOnIncrement}>+</button>
    </div>
  );
}

export default Functioncounter;
