import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseNumber, decreaseNumber } from "./action/index"
const App = () => {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <>
      <div className=" text-center bg-warning vh-100  container-fluid">

        <h1>Increment/decrement counter</h1>
        <h4>REDUX-APP</h4>
        <div className='  text-center row m-auto p-5 mt-5 container-fluid '>


          <button onClick={() => dispatch(increaseNumber())} className="col-2 m-auto btn btn-success text-white rounded-5 " value="+"><h1 className='display-1'>+</h1></button>
          <input name="quantity" className="text-center display-1 quantity__input auto col-4 w-25 mb-0 bg-white rounded-5 btn-outline-light border-0 " value={myState} />
          <button onClick={() => dispatch(decreaseNumber())} className="btn btn-danger m-auto col-2 text-white rounded-5 " value="-" ><h1 className='display-1'>-</h1></button>

        </div>

      </div>
    </>

  )
}

export default App
