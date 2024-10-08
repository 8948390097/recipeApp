import React, { useRef, useState } from 'react'

const ExpenseTracker = () => {
 
    const [clicked, setclicked] = useState(false);

   

  let snoRef = useRef()
  let placeRef = useRef()
  let priceRef = useRef()

  // let headingRef = useRef();

  const [arr, setarr] = useState([ 
    {
        id:1,
        place:"lucknow",
        price:300
    },
    {
        id:2,
        place:"food",
        price:3000
    },
    {
        id:3,
        place:"petrol",
        price:500
    },
    {
        id:4,
        place:"club",
        price:5000
    },

]);

    // let arr= 
   
    const handleSubmit = (e)=>{
        e.preventDefault();
        let obj = {
          id:snoRef.current.value,
          place:placeRef.current.value,
          price:priceRef.current.value
        }
        console.log(obj);
        // console.log(headingRef.current.innerHTML)

        if(obj.id && obj.place && obj.price){
          setarr([...arr,obj])

        }
        else{
          alert("please fill all the fields")
        }

        // arr.push(obj)
        // console.log(arr)

      // console.log("running")
    }

    const handleDelete = (ans,index)=>{
      //method--1
          console.log(ans,index)
          let copyArr = [...arr]
          // console.log(copyArr)
          copyArr.splice(index,1)
          console.log(copyArr)

          setarr(copyArr)

    }

  return (
    <div>
      <h4 className='text-center'>expense tracker app</h4>
      {/* <p>{arr[0].price}</p>
      <p>{arr[0].place}</p>
      <p>{arr[1].price}</p>
      <p>{arr[1].place}</p> */}

     
      {/* {
        arr.map((obj)=>{
            return <div>
                <p>{obj.price}</p>
                <p>{obj.place}</p>
            </div>
        })
      } */}

<div className='text-center'>
    <button onClick={()=>setclicked(true)} className='btn btn-info my-2'>Add Expense</button>
    </div>


     { clicked && <form style={{width:"max-content"}} action="" className='d-flex expenseForm gap-2 bg-dark my-3 mx-auto p-3'>
     <button onClick={()=>setclicked(false)} type="button" class="btn-close bg-dark closeBtn" aria-label="Close"></button>

        <input type="number" placeholder='sno' ref={snoRef} />
        <input type="text" placeholder='enter the place' ref={placeRef}/>
        <input type="number" placeholder='enter the price' ref={priceRef} />
        <button onClick={handleSubmit} className='btn btn-success'>Add Item</button>
      </form>}

      {/* <h1 ref={headingRef}>awdawd </h1> */}

<table className="table table-dark  w-75 m-auto text-center">
  <thead>
    <tr>
      <th scope="col">Sno</th>
      <th scope="col">Place</th>
      <th scope="col">Price</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {
        arr.map((obj,i)=>{
            return   <tr key={obj.id}>
            <th>{i+1}</th>
            <td>{obj.place}</td>
            <td>{obj.price}</td>
            <td><button onClick={()=>handleDelete(obj,i)} className='btn btn-danger'>delete</button></td>
          </tr>
        })
    }
   
  </tbody>
</table>

    </div>
  )
}

export default ExpenseTracker