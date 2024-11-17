import React from 'react'

const Landingp = () => {
  return (
    <>
      <div className='w-full h-[60vh] bg-white grid grid-cols-3 gap-2 px-2 pt-2  pb-2'>

        {[
          {
            img: "https://images.samsung.com/is/image/samsung/assets/in/ai-products/merchandising/version-1/2408/co05_showcase-card-tab-travel-3_pc_684x684.jpg?$684_684_JPG$",
            price: "AI Translation"
          },
          {
            img: "https://images.lifestyleasia.com/wp-content/uploads/sites/5/2024/01/22110449/Samsung-S24-Series-Galaxy-AI-Note-Assist-806x806.jpg",
            price: "Note Assits"
          },
          {
            img: "https://www.digitaltrends.com/wp-content/uploads/2024/01/galaxy-24-ultra-photo-edit-ai-2.jpg?fit=3000%2C2000&p=1",
            price: "Photo Assits 3"
          }

        ].map((item, index) => {
          return <div key={index} className='landing-menu relative w-full  bg-black overflow-hidden rounded-md border-black border-2 '>
            <img  src={item.img} className='absolute bg-cover object-fill h-[100%] w-[100%] hover:scale-[1.1] transition-all duration-500 ' alt="" />
            <p className='absolute w-full text-stroke-[2px] bg-[rgba(56,56,56,0.32)] backdrop-blur-md  text-stroke-black bottom-3 text-center font-extrabold font-mono pointer-events-none text-white text-[2.5rem]'>{item.price}</p>
          </div>
        })}

      </div>
    </>
  )
}

export default Landingp



