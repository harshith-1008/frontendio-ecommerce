import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Lefthome from "./Lefthome"
import Righthome from "./Righthome"
import Data from "./Imagesdata"
import Photocomp from './Photocomp';

function App() {
  const thumb = Data.map(items => {
    return(
      <Photocomp 
        img={items.img} />
    )
  })

  return (
    <div className='pt-10'>
       <Navbar />
       <section className="flex flex-row mt-28 ml-12 justify-between">
        <section className="flex flex-col">
          <Lefthome />
          <div className="flex flex-row pr-12 pl-1">{thumb}</div>
        </section>
          <Righthome />
       </section>
    </div>
  )
}

export default App;
