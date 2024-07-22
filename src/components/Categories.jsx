import React from 'react'

const Categories = ({name, categoryCover}) => {
  return (
    <article>
        <figure className='h-48'>
            <img className="h-full w-full max-w-full rounded-lg object-cover" src={categoryCover} alt=""/>
            <figcaption className="mt-2 text-lg text-center text-gray-500 dark:text-gray-400">{name}</figcaption>
        </figure>
    </article>
  )
}

export default Categories