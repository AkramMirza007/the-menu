import React from 'react'
import "./style.css"

function Shown() {
    return (
        <>
            <div className='w-[90%] h-[70%] bg-slate-200 shadow-md rounded-xl  fixed z-[5] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 overflow-hidden '>
                <div className="con w-full h-full overflow-y-auto relative overflow-x-hidden no-scrollbar">
                    <div className="img-con w-[30%] h-full bg-red-300 fixed"></div>
                    <div className="details absolute right-0 w-[70%] h-fit">
                        <div className="device w-[100%] h-32 bg-slate-200"></div>
                        <div className="device w-[100%] h-32 bg-green-200"></div>
                        <div className="device w-[100%] h-32 bg-red-800"></div>
                        <div className="device w-[100%] h-32 bg-yellow-800"></div>
                        <div className="device w-[100%] h-32 bg-blue-800"></div>
                        <div className="device w-[100%] h-32 bg-pink-800"></div>
                        <div className="device w-[100%] h-32 bg-violet-800"></div>
                        <div className="device w-[100%] h-32 bg-cyan-800"></div>
                        <div className="device w-[100%] h-32 bg-gray-700"></div>
                    </div>
                    <button className='fixed right-5 top-5 text-gray-300 bg-[rgba(0,0,0,0.53)] rounded-[50%] w-[2rem] h-[2rem]'>X</button>
                </div>
            </div>
        </>
    )
}

export default Shown
