import React from 'react'
import { useState, useEffect } from 'react';
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";

const slides =[
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1706372124814-417e2f0c3fe0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1706372124839-f35d821ccd24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1724323264602-0aa55ba431b2?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1659540190941-66606ec13ca6?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        },3000)
        return ()=> clearInterval(intervalId);
    },[currentSlide, slides.length])

  return (
    <>
    <div className='slide-con   h-[80vh] relative flex items-center overflow-hidden pt-20 bg-gray-100'>
        <div className="slides w-fit flex h-full " >
            {slides.map((slide,index)=>(
                <div style={{ transform: `translateX(${currentSlide * -100}%)` }} className="slide w-[100vw] h-full bg-green-400 transition-all ease-in duration-300 " ><img className='w-full h-full' src={slide.img} alt="" /></div>
            ))}
            
        </div>
        <button className='absolute top-[50%] left-3  p-2 text-lg opacity-70 ' onClick={prevSlide}><HiArrowCircleLeft  style={{ fontSize: "5em", color: "black", background: "white", borderRadius: "50%" }}/></button>
        <button className='absolute top-[50%] right-3  p-2 text-lg opacity-70 ' onClick={nextSlide}><HiArrowCircleRight  style={{ fontSize: "5em", color: "black", background: "white", borderRadius: "50%" }}/></button>
        
    </div>
      
    </>
  )
}

export default Landingslide
