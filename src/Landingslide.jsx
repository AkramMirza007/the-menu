import React from 'react'
import { useState, useEffect } from 'react';
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";

const slides =[
    {
        id: 1,
        img: "https://cdn.mos.cms.futurecdn.net/59ETpbimvEV6PLjrBVECTH.png",
        text: "samsung s24 ultra"
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1706372124839-f35d821ccd24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "samsung s24+ with new colors"
    },
    {
        id: 3,
        img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/csm_Samsung_Galaxy_Z_Fold_4_Ben_Geskin_Renderbild_a2797282be28.jpg",
        text: "samsung Fold 3"
    },
    {
        id: 4,
        img: "https://www.gizmochina.com/wp-content/uploads/2022/12/samsung-powerbank-1920x1117.jpg",
        text:"samsung powerbank 3"
    },
]

const Landingslide = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const prevSlide = ()=>{
        setCurrentSlide((currentSlide - 1 + slides.length)%slides.length);
    }
    const nextSlide = ()=>{
        setCurrentSlide((currentSlide + 1)% slides.length)
    }
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCurrentSlide((currentSlide + 1)% slides.length);
        },4000)
        return ()=> clearInterval(intervalId);
    },[currentSlide, slides.length])

  return (
    <>
    <div className='slide-con   md:h-[100vh] h-[55vh]  relative flex items-center overflow-hidden pt-20 bg-gray-100'>
        <div className="slides w-fit flex h-full relative" >
            {slides.map((slide,index)=>(
                <div key={index} style={{ transform: `translateX(${currentSlide * -100}%)` }} className="slide w-[100vw] h-full bg-gray-300 transition-all ease-in duration-300 relative " ><img className='w-full h-full' src={slide.img} alt="" /><h1 className='md:text-[3.5vw] text-[3.5vh] z-20 bottom-[10%] left-[10%] font-extrabold text-shadow-sm text-shadow-[rgba(0,0,0,0.86)] font-mono text-white absolute'>{slide.text}</h1></div>
            ))}
            
        </div>
        <button className='absolute top-[50%] left-3  p-2 text-lg opacity-60 ' onClick={prevSlide}><HiArrowCircleLeft  style={{ fontSize: "5em", color: "black", background: "gray", borderRadius: "50%" }}/></button>
        <button className='absolute top-[50%] right-3  p-2 text-lg opacity-60 ' onClick={nextSlide}><HiArrowCircleRight  style={{ fontSize: "5em", color: "black", background: "gray", borderRadius: "50%" }}/></button>
        
    </div>
      
    </>
  )
}

export default Landingslide
