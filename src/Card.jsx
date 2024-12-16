import React from 'react'
import data from "./Mock_DATA.json"

function Card() {
    return (
        <>
            <div className="w-full min-h-[100vh] bg-blue-100 grid md:grid-cols-2  grid-rows-[repeat(10,30vh)] md:grid-rows-[repeat(5,30vw)]   p-[2vw] gap-[2.5vw]">
            
                {data.map((item, index) => {
                return <div key={index} className=' bg-white shadow-md rounded-md relative overflow-hidden'>
                <img className='w-full h-full absolute top-0 z-10 bg-white left-0 hover:opacity-0 transition-opacity duration-300 object-contain border-[1px] rounded-md border-slate-500' src={item.img} alt="" />
                <video muted loop autoPlay className='w-full h-full absolute top-0 left-0 object-cover' src={item.bgVideo}></video>
                <div className='marker md:gap-[1vw] gap-[5vw] absolute h-[100%] w-[100%] rounded-full left-[80%] md:left-[75%] top-0 z-20 hover:left-[60%] transition-all duration-300 backdrop-blur-lg backdrop-brightness-50 shadow-xl flex items-center px-[5%]'>
                    <h2 className=' mix-blend-multiply text-slate-100 md:text-[1.5vw] text-[2.8vw] p-1  stroke-[1px] shadow-lg font-semibold font-mono md:mr-[0vw]'>{item.price}</h2>
                    <div className="specs h-[80%] w-[20%] flex items-center">
                        <ul className='text-white w-full text-[1vw] h-full inline-flex items-center justify-evenly flex-col text-wrap p-[0.2vh]'>
                            <li>{item.megapixal}</li>
                            <li>{item.glass}</li>
                            <li>{item.battray}</li>
                            <li>{item.processor}</li>
                        </ul>
                    </div>
                </div>
            </div>
              }).slice(0, 10)}



            </div>
        </>
    )
}

export default Card
