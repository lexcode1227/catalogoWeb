import React from 'react'

const SubCategories = ({name, categoryCover, subCategories}) => {
  return (
    <article className="grid gap-4">
      <figure className='h-fit relative'>
          <img className="h-full w-full max-w-full rounded-lg object-cover" src={categoryCover} alt={name}/>
          <div className='flex items-end justify-center p-6 absolute h-full w-full top-0 right-0 left-0 bottom-0'>
            <div className='backdrop-blur p-5 rounded-lg'>
              <h3 className='text-white font-bold text-2xl'>{name}</h3>
              <p className='text-white font-semibold text-xl mt-1'>Comprar ahora</p>
            </div>
          </div>
      </figure>
      <div className="grid grid-cols-2 gap-x-5 gap-y-16">
          {subCategories.map((item, index)=>(
            <figure key={index} className='w-full h-60 md:h-auto'>
              <img className="w-full h-full max-w-full rounded-lg object-cover" src={item.subCategoryCover} alt={item.subCategoryName}/>
              <figcaption className="mt-2 text-lg text-center text-gray-500">{item.subCategoryName}</figcaption>
            </figure>
          ))}
      </div>
      <div className="inline-flex items-center justify-center w-full my-12">
        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
            <svg width="250" height="50" viewBox="0 0 125 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M62.5776 9.25429L67.1272 4.70469H124.979V4.4979H67.1272L62.5776 0L58.0797 4.4979H0.0206299V4.70469H58.0797L62.5776 9.25429ZM62.5776 0.3102L66.9204 4.60129L62.5776 8.94409L58.2348 4.60129L62.5776 0.3102Z" fill="#555555"/>
            </svg>
        </div>
      </div>
    </article>

  )
}

export default SubCategories