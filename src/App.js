import React from 'react'
// import "./App.css"
const App = () => {
  return (
    <>
      <div class=" container-fluid vh-100 bg-warning text-center">

        <h1>Increment/decrement counter</h1>
        <h4>REDUX-APP</h4>
        <div className='bg-dark mt-5  text-center space-right2 row m-auto p-5 container-fluid w-50'>

       
            <button href="#" class=" btn btn-success text-white  "><h1 className='display-1'>+</h1></button>
            <span name="quantity" class="quantity__input  bg-white " ><h1 className='display-1'>0</h1></span>
            <button href="#" class="btn btn-danger text-white  " ><h1 className='display-1'>-</h1></button>
     
        </div>

      </div>
    </>

  )
}

export default App
