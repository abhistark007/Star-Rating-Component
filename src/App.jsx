
import { useState } from 'react';
import './App.css'
import {FaStar} from 'react-icons/fa'

function App() {
  const numberOfStars=10;

  const [rating,setRating]=useState(0);
  const [hover,setHover]=useState(0);

  function handleClick(getCurrentIndex){
    console.log("OnClick Current Index -> ",getCurrentIndex);
    setRating(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex){
    console.log("onMouseEnter index -> ",getCurrentIndex);
    setHover(getCurrentIndex);
  }
  function handleMouseLeave(){
    setHover(rating);
  }

  return (
    <div className='flex w-full justify-center mt-10 '>
      {
        [...Array(numberOfStars)].map((_,index)=>{
          index+=1;
          return <FaStar
          className={index<=(hover||rating)?'text-yellow-500':''}
          key={index}
          onClick={()=>handleClick(index)}
          onMouseMove={()=>handleMouseEnter(index)}
          onMouseLeave={()=>handleMouseLeave()}
          size={40}
          />
        })
      }
    </div>
  )
}

export default App
