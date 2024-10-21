import { useState } from "react";



function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav className="w-full h-fit fixed z-10">
      <div className='w-full h-16 top-0 left-0 fixed bg-white flex items-center justify-between z-20 capitalize border-b-gray-600 border-[1px]'>
        <div className='lNav w-[50%] text-[2rem]  flex justify-center font-bold text-gray-700 '><h2>Samsung</h2></div>
        <div className='rNav w-[50%] gap-2 h-full flex items-center justify-evenly text-gray-500'><a href="#">home</a><a href="#" onClick={handleToggle}>search</a><a href="#">Order</a><a href="#">More</a></div>
      </div>


      <div className={`w-[100%] z-10  h-16  ease-in-out duration-500 py-[4px] gap-[4px] bg-gray-200 top-0 left-[0%] outline-none fixed flex flex-col items-center justify-center   ${isOpen ? 'top-[4rem]' : 'top-8'}`}>
        <input type="text" className='w-[95%]  h-[60%] rounded-[0.5rem] text-sm self-center text-gray-600 outline-none px-[0.8rem] ' name="" id="search_box" />
        <div className="list-con relative h-8  w-full">
          <div className="list-option w-[100%] z-10  h-fit text-sm py-[0.25rem] ease-in-out duration-500 left-[0%] outline-none fixed flex items-center justify-evenly  ">
            <a href="">AI</a>
            <a href="">Accessory</a>
            <a href="">Tech</a>
            <a href="">Mobiles</a>
            <a href="">Laptops</a>
            <a href="">Samsung pad</a>
          </div>
        </div>
      </div>

      </nav>
    </>
  )
}

export default Nav
