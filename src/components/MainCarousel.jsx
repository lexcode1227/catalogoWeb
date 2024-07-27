import React from 'react'
import { Carousel } from "flowbite-react";
import SearchIcon from './SearchIcon';

const MainCarousel = () => {
  const images = [
    {
      url: "https://res.cloudinary.com/dwuv0l98b/image/upload/v1706217898/samples/woman-on-a-football-field.jpg"
    },
    {
      url: "https://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg"
    },
    {
      url: "https://res.cloudinary.com/dwuv0l98b/image/upload/v1706217895/samples/outdoor-woman.jpg"
    },
    {
      url: "https://res.cloudinary.com/dwuv0l98b/image/upload/v1706217898/samples/woman-on-a-football-field.jpg"
    },
  ]
  return (
    <div className="h-96 md:h-[600px] w-full max-w-[710px]">
      <Carousel slideInterval={5000}>
        {images.map((item, index)=> (
          <figure key={index} className='relative'>
            <img className='w-full' src={item.url} alt="..." />
            <div className='flex items-end justify-center p-6 absolute h-full w-full top-0 right-0 left-0 bottom-0'>
                <div className='w-full flex justify-center text-center p-5 rounded-lg'>
                  <span className='flex items-center gap-2 w-56 rounded-full bg-black/50 text-white px-4 py-3 '><SearchIcon color={"#fff"}/> Explorar colección</span>
                </div>
            </div>
          </figure>
        ))}
      </Carousel>
    </div>
  )
}

export default MainCarousel