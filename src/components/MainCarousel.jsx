import React from 'react'
import { Carousel } from "flowbite-react";
import SearchIcon from './SearchIcon';

const MainCarousel = () => {
  return (
    <div className="h-96 xl:h-80 2xl:h-96 w-full max-w-[710px]">
      <Carousel slideInterval={5000}>
        <div className='relative'>
          <img src="http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217898/samples/woman-on-a-football-field.jpg" alt="..." />
          <span className='flex items-center gap-2 w-56 absolute left-32 bottom-20 rounded-full bg-black/50 text-white px-4 py-3 '><SearchIcon color={"#fff"}/> Explorar colección</span>
        </div>
        <div className='relative'>
          <img src="http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg" alt="..." />
          <span className='flex items-center gap-2 w-56 absolute left-32 bottom-[160px] rounded-full bg-black/50 text-white px-4 py-3 '><SearchIcon color={"#fff"}/> Explorar colección</span>
        </div>
        <div className='relative'>
          <img src="http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217895/samples/outdoor-woman.jpg" alt=".." />
          <span className='flex items-center gap-2 w-56 absolute left-32 bottom-[160px] rounded-full bg-black/50 text-white px-4 py-3 '><SearchIcon color={"#fff"}/> Explorar colección</span>
        </div>
        <div className='relative'>
          <img src="http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217894/samples/look-up.jpg" alt="..." />
          <span className='flex items-center gap-2 w-56 absolute left-32 bottom-[60px] rounded-full bg-black/50 text-white px-4 py-3 '><SearchIcon color={"#fff"}/> Explorar colección</span>
        </div>
      </Carousel>
    </div>
  )
}

export default MainCarousel