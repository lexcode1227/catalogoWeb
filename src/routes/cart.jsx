import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CartShopping = () => {
    const [cart, setCart] = useState([])

    useEffect(()=> {
        setCart([
            {
                id: 1,
                image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
                title: "Crema",
                price: "9.63",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit, ducimus totam aliquam sapiente. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eaque vero fugit dolorem, reprehenderit modi." 
            },
            {
                id: 2,
                image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
                title: "Zapatos",
                price: "67.95",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit, ducimus totam aliquam sapiente deleniti magnam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eaque vero fugit dolorem, reprehenderit modi." 
              },
        ])
    }, [])
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Carrito de compras</h2>

            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                    <div className="space-y-6">
                        {cart?.map((item, index)=> (
                            <li key={item.id+index} className="flex py-6">
                                <div className="h-full w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img alt={item.title+"-"+ index} src={item.image} className="h-full w-full object-contain object-center" />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col text-title">
                                    <div>
                                        <div className="flex justify-between text-title font-medium text-gray-900">
                                            <h3 className='font-bold'>
                                                <Link to={`/products/${item.id}`}>{item.title}</Link>
                                            </h3>
                                            <p className="ml-4 font-bold">{`$${item.price}`}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">{item.description.split(".")[0]}</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-title">
                                        <p className="text-gray-500">Qty 1</p>
                                        <div className="flex">
                                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </div>
                </div>

                <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                        <p className="text-xl font-semibold text-gray-900">Resumen de compra</p>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <dl className="flex items-center justify-between gap-4">
                                <dt className="text-base font-normal text-gray-500">Precio total</dt>
                                <dd className="text-base font-medium text-gray-900">$7,592.00</dd>
                            </dl>
                            <dl className="flex items-center justify-between gap-4">
                                <dt className="text-base font-normal text-gray-500">Store Pickup</dt>
                                <dd className="text-base font-medium text-gray-900">$99</dd>
                            </dl>
                        </div>
                            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                            <dt className="text-base font-bold text-gray-900">Total</dt>
                            <dd className="text-base font-bold text-gray-900">$8,191.00</dd>
                        </dl>
                    </div>

                    <Link to={"#"} className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        Pedir por Whatsapp
                    </Link>

                    <div className="flex items-center justify-center gap-2">
                        <span className="text-base font-normal text-gray-500"> or </span>
                        <Link to={"/discover"} title="" className="inline-flex items-center gap-2 text-base font-medium text-blue-700 underline hover:no-underline">
                        Continuar explorando
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                        </svg>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CartShopping