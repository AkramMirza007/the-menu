import { useState } from "react";
import data from './Mock_DATA.json';



function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const handleToggle = (e) => {
    setIsOpen(!isOpen)
    setIsShow(!isShow)
    e.preventDefault()
  }


  const handleSearchList = (e) => {


  }
  const listOption = [
    {
      name: "Mobile",
      link: "#"
    },
    {
      name: "Accessories",
      link: "#"
    },
    {
      name: "Tech",
      link: "#"
    },
    {
      name: "AI",
      link: "#"
    },
    {
      name: "Laptops",
      link: "#"
    },
    {
      name: "Pad",
      link: "#"
    }
  ]
  const [value, setValue] = useState('');
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log('search', searchTerm);
    console.log(data);

  }
  const onChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <>
      <nav className="w-full h-fit fixed z-30 ">
        {/* nav lists */}
        <div className='w-full h-16 top-0 left-0 fixed bg-white flex items-center justify-between z-20 capitalize shadow-md border-[1px]'>
          <div className='lNav w-[50%] text-[2rem]  flex justify-center font-bold text-gray-700 '><h2>Samsung</h2></div>
          <div className='rNav w-[50%] gap-2 h-full flex items-center justify-evenly text-gray-500'><a href="#">home</a><a href="#" onClick={(e) => { onSearch(value); handleToggle(e); e.preventDefault() }} >search</a><a href="#">Order</a><a href="#">More</a></div>
        </div>

        {/* nav search */}
        <div className={`w-[100%] z-10  h-16  ease-in-out duration-500 py-[4px] gap-[4px] bg-[rgb(216,216,213)] top-0 left-[0%] outline-none fixed flex flex-col items-center justify-center   ${isOpen ? 'top-[4rem]' : 'top-8'}`}>
          <input type="text" value={value} onChange={onChange} className='w-[95%]  h-[60%] rounded-[0.5rem] text-sm self-center bg-gray-100 text-gray-800 outline-none px-[0.8rem] tracking-wide ' name="" id="search_box" />
          <div className="list-con relative h-8  w-full">
            <div className="list-option shadow-md w-[100%] z-10  h-fit text-sm py-[0.25rem] ease-in-out duration-500 left-[0%] outline-none fixed flex items-center justify-evenly tracking-wide  ">
              {listOption.map((item, index) => {
                return <a key={index} onClick={() => onSearch(item.fullName || item.similar)} href={item.link} className=" active:bg-black active:rounded-md active:text-white px-1 ">{item.name}</a>
              })}
            </div>
          </div>
        </div>

        <div className={`search-lists w-[100%] h-fit bg-slate-100 transition-all ease-in duration-300 shadow-md  rounded-md fixed top-32  left-0 ${isShow ? 'scale-100' : 'scale-0' || 'shadow-none'} `}>
          <ul className="">

            {data.filter((item) => {
              const searchTerm = value.toString().toLowerCase();
              const fullName = item.name.toString().toLowerCase();
              const similar = item.similars || item.name;
              similar.toLowerCase();
              // const char = fullName.map((item,index)=>{ return fullName[item] == searchTerm })

              return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm || similar.startsWith(searchTerm) && similar === searchTerm
            }).slice(0, 5).map((item, index) => {
              return <li key={index} onClick={() => { onSearch(item.name) }} className="pl-[1rem] border-gray-300 border-b-[1px]">{item.name}</li>
            })}


          </ul>

        </div>
      </nav>
    </>
  )
}

export default Nav
