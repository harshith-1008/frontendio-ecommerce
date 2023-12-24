import React, { useState } from 'react';
import './App.css';
import Navbar from "./Navbar";
import Lefthome from "./Lefthome"
import Righthome from "./Righthome"
import Data from "./Imagesdata"
import Photocomp from './Photocomp';
// import BigPreview from './BigPreview';

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

  // const big = Data.map(item => {
  //   return(
  //     <BigPreview 
  //       img={item.img}
  //       big={item.big} />
  //   )
  // })

  const [count, setCount] = useState(1); // state for the counter
  function increment(){
      setCount(prevCount => prevCount + 1)
  }
  function decrement(){
      if(count>0){
        setCount(prevCount => prevCount - 1)
      }
  }

  // const [preview, setPreview] = useState(true)

  const [cart, setCart] = useState(0)
  function addToCart(){
    setCart(prev => prev + (count-prev))
    console.log(cart)
  }

  return (
    <div className='pt-10'>
       <Navbar cart = {cart}/>
       <section className="flex flex-row mt-28 ml-12 justify-between">
        <section className="flex flex-col">
          <Lefthome mainImage={mainImage}/>
          <div className="flex flex-row pr-12 pl-1">{thumb}</div>
        </section>
          <Righthome incrementCount={increment} decrementCount={decrement} count={count} handleClick={addToCart}/>
       </section>
       {/* {big} */}
    </div>
  )
}

export default App;
