import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({productImage, title, price, linkTo, iconTitle}) => {
  return (
    <>
      {iconTitle ?
        <Link className='cursor-default'>
            <figure className='h-16'>
                <img className="h-full w-full max-w-full rounded-lg object-contain" src={productImage} alt={title}/>
            </figure>
            <div className='w-full text-center'>
                <h3 className="text-lg text-center text-gray-500">{title}</h3>
            </div>
        </Link> :
        <Link to={`/products/${linkTo}`}>
            <figure className='h-48'>
                <img className="h-full w-full max-w-full rounded-lg object-cover" src={productImage} alt={title}/>
            </figure>
            <div className='w-full text-center'>
                <h3 className="text-lg text-center text-gray-500">{title}</h3>
                <h4 className="text-lg font-bold text-center text-gray-500">$ {price}</h4>
            </div>
        </Link>
      }
    </>
  )
}

export default ProductCard