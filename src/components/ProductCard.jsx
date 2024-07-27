import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({productImage, title, price, linkTo, iconTitle}) => {
  return (
    <>
      {iconTitle ?
        <Link className='cursor-default'>
            <figure className='h-16'>
                <img className="h-full w-full max-w-full rounded-lg object-contain" loading="lazy" src={productImage} alt={title}/>
            </figure>
            <div className='w-full text-center'>
                <h3 className="text-lg text-center text-gray-500">{title}</h3>
            </div>
        </Link> :
        <Link to={`/products/${linkTo}`} className='flex flex-col justify-between'>
            <figure className='h-60 md:h-auto'>
                <img className="h-full w-full max-w-full rounded-lg object-contain" loading="lazy" src={productImage} alt={title}/>
            </figure>
            <div className='w-full text-center'>
                <h3 className="text-lg text-center text-gray-500">{title}</h3>
                <h4 className="text-lg font-bold text-center text-gray-500">$ {price.toFixed(2)}</h4>
            </div>
        </Link>
      }
    </>
  )
}

export default ProductCard