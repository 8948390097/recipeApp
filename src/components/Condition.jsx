import React, { useState } from 'react'

const Condition = () => {

const [x, setx] = useState(false);
const handelClick = () =>{
    // console.log("run")
    setx(!x)
    console.log("x",x);

}

  return (
    <div>
      { x && <h1>Lorem ipsum dolor sit amet.</h1>}
      { !x && <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, nam!</h1>}
      <button onClick={handelClick}> Click me</button>

    { x && <form action="" className='' style={{backgroundColor:"green"}}>
    <fieldset>
    <label htmlFor="">Name</label><br/>
    <input type="text" />
    <label htmlFor="">Name</label><br/>
    <input type="text" />
    <label htmlFor="">Name</label><br/>
    <input type="text" />
    <label htmlFor="">Name</label><br/>
    <input type="text" />
    </fieldset>
    </form>
}
    </div>
  )
}

export default Condition
