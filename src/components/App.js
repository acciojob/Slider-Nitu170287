


import React, { useEffect, useState } from "react";
import './../styles/App.css';
import Reviews from "../Reviews";

const App = () => {

const [slideIndex, setSlideIndex] = useState(0)

useEffect(()=>{
    setTimeout(()=>{
        slideIndex < Reviews.length-1 ? setSlideIndex((prevValue)=>prevValue + 1) : setSlideIndex(0)
        console.log(slideIndex)
       
    },3000)
   
},[slideIndex])

  return (
    <div>
        {/* Do not remove the main div */}
        <h1 id="review-heading">Reviews</h1>
        
            <div id="review-container">
            {slideIndex >= 0 ?
            <>
            <h2 id="person-index">{Reviews[slideIndex].name}</h2>
            <img src={Reviews[slideIndex].image} id="person-index-image" width="200" height="200"/>
            </> : null}
            <div>
           
            <button className="prev" onClick={()=>{slideIndex > 0 ? setSlideIndex((prevValue)=>prevValue-1) : setSlideIndex(Reviews.length-1)}}>Previous</button> 
            <button className="next" onClick={()=>{slideIndex < Reviews.length-1 ? setSlideIndex((prevValue)=>prevValue+ 1) : setSlideIndex(0)}}>Next</button>
            </div>
            
            </div>
           
    
        
    </div>
  )
}

export default App

