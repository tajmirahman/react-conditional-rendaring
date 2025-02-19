
import { useState } from 'react'
import './App.css'
import Product from './Components/Product/Product'
import Products from './Components/Products/Products'

function App() {

  const [state, setState]=useState(true);

  const handelButton=()=>{
    setState(!state);
  }
  

  return (
    <>

    <button onClick={handelButton}>Purches</button>
      
      {
        state?<Products></Products>:<Product></Product>
      }
      
      
      
      
    </>
  )
}

export default App
