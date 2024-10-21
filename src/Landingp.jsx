import React from 'react'

const Landingp = () => {
  return (
    <>
      <div className='w-full h-[50vh] bg-gray-300 grid grid-cols-3 gap-2 px-2 pt-[0.8rem] pb-2'>

        {[
          {
            img: "https://images.unsplash.com/photo-1507955987999-df4864ee80d4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "200$"
          },
          {
            img: "https://images.unsplash.com/photo-1591122947157-26bad3a117d2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "200$"
          },
          {
            img: "https://images.unsplash.com/photo-1661347333288-ac27f72c54cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "200$"
          }

        ].map((item, index) => {
          return <div className='landing-menu relative bg-white overflow-hidden rounded-md border-black border-2 '>
            <img src={item.img} className='absolute bg-cover object-fill h-[100%] w-[100%] hover:scale-125 transition-all duration-500 ' alt="" />
            <p className='absolute w-full bg-[rgba(0,0,0,0.46)] bottom-3 text-center font-semibold font-serif text-white '>{item.price}</p>
          </div>
        })}

      </div>
    </>
  )
}

export default Landingp



