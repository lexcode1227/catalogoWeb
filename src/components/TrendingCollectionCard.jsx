import React from 'react'

const TrendingCollectionCard = ({title}) => {
  return (
    <article className='flex flex-col gap-2 px-2'>
        <div className="grid gap-4">
            <figure>
                <img className="h-auto max-w-full transition-all duration-300 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt=""/>
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{title}</figcaption>
            </figure>
            <div className="grid grid-cols-3 gap-4">
                <figure>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{title}</figcaption>
                </figure>
                <figure>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{title}</figcaption>
                </figure>
                <figure>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{title}</figcaption>
                </figure>
            </div>
            <figure>
                <img className="h-auto max-w-full transition-all duration-300 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt=""/>
                <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{title}</figcaption>
            </figure>
            <div className="grid grid-cols-3 gap-4">
                <figure>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{title}</figcaption>
                </figure>
                <figure>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{title}</figcaption>
                </figure>
                <figure>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{title}</figcaption>
                </figure>
            </div>
        </div>
    </article>
  )
}

export default TrendingCollectionCard