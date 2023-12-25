import React, { useState } from 'react';
import './App.css';
import Navbar from "./Navbar";
import Lefthome from "./Lefthome"
import Righthome from "./Righthome"
import Data from "./Imagesdata"
import Photocomp from './Photocomp';

function App() {
  const [mainImage, setMainImage] = useState(Data[0].big)

  const thumb = Data.map(items => {
    return(
      <Photocomp 
        img={items.img} 
        onClick={() => {
          setMainImage(items.big)
        }}/>
    )
  })

  const [cart, setCart] = useState(0)
  function addToCart(){
    setCart(prev => prev + (count-prev))
    console.log(cart)
  }

  const [count, setCount] = useState(1); // state for the counter
  function increment(){
      setCount(prevCount => prevCount + 1)
  }
  function decrement(){
      if(count>0){
        setCount(prevCount => prevCount - 1)
      }
  }

  const [preview, setPreview] = useState(false)
  function showPreview(){
      setPreview(prev => !prev)
      console.log(preview)
  }

  return (
    <div className='pt-10 relative'>
       <Navbar cart = {cart}/>
       <section className="flex flex-row mt-20 ml-12 justify-between">
        <section className="flex flex-col">
          <Lefthome mainImage={mainImage} big={showPreview}/>
          <div className="flex flex-row pr-12 pl-1">{thumb}</div>
        </section>
          <Righthome incrementCount={increment} decrementCount={decrement} count={count} handleClick={addToCart}/>
       </section>

       { preview &&
        <div className="flex flex-col items-center absolute top-10 left-0 w-full h-full bg-white bg-opacity-90 p-8 z-50">
          <button className='text-extrabold text-3xl ml-auto hover:text-orange-600' onClick={showPreview}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <Lefthome mainImage={mainImage}/>
          <div className="flex flex-row items-center">{thumb}</div>
        </div>
       }

    </div>
  )
}

export default App;
