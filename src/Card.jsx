import React from 'react'
import data from "./Mock_DATA.json"

function Card() {
    return (
        <>
            <div className="w-full min-h-[100vh] bg-blue-100 grid md:grid-cols-2  grid-rows-[repeat(10,30vh)] md:grid-rows-[repeat(5,30vw)]   p-[2vw] gap-[2.5vw]">

                {data.map((item, index) => {
                    return <div key={index} className=' bg-white shadow-md rounded-[2vw] relative overflow-clip no-scrollbar'>
                        <img className='w-full h-full absolute top-0 z-10 bg-white left-0 hover:opacity-0 transition-opacity duration-300 object-contain  ' src={item.img} alt="" />
                        <video muted loop autoPlay className='w-full h-full absolute top-0 left-0 object-cover' src={item.bgVideo}></video>
                        <div className='marker md:gap-[1vw] gap-[5vw] absolute h-[100%] w-[100%] backdrop-blur-sm left-[0%]  bottom-[-85%] z-20 hover:bottom-[0%] transition-all duration-300 bg-gray-100/40 shadow-xl flex justify-between px-[5%] py-[1vw] flex-col'>
                            <div className=' relative w-full h-[10%] flex justify-center  '><h3 className='px-[0.5vw] py-[0.3vw] shadow-lg bg-[rgb(224,224,224)] rounded-lg font-mono font-bold text-black'>{item.name}</h3></div>
                            <div className='w-full h-[70%] font-mono flex flex-col items-center rounded-[2vw] gap-[1vw] py-[2vw] shadow-lg bg-[rgb(216,216,213,0.5)]'>
                                <div className='w-[50%] h-[100%] rounded-xl gap-[1vw] py-[2vw] flex flex-col items-center text-wrap px-[1rem] overflow-y-auto scrollbar-none'>
                                    <h3 className='md:text-[1vw] text-[2vh] text-center w-fit  bg-white px-[0.5vw] rounded-[2vw]'>{item.processor}</h3>
                                    <div className='md:text-[1vw] flex text-[2vh] text-center w-fit  bg-white px-[0.5vw] gap-[1vw] rounded-[2vw]'>{item.storage.map((elems, index)=>{ return <h3 key={index}>{elems}</h3>})}</div>
                                    <h3 className='md:text-[1vw] text-[2vh] text-center w-fit  bg-white px-[0.5vw] rounded-[2vw]'>{item.megapixal}</h3>
                                    <h3 className='md:text-[1vw] text-[2vh] text-center w-fit  bg-white px-[0.5vw] rounded-[2vw]'>{item.emi}</h3>
                                    <h3 className='md:text-[1vw] text-[2vh] text-center w-fit  bg-white px-[0.5vw] rounded-[2vw]'>{item.battray}</h3>
                                    
                                </div>





                            </div>
                        </div>
                    </div>
                }).slice(0, 10)}



            </div>
        </>
    )
}

export default Card
