import React from 'react'
import { Link} from 'react-router-dom'
import { Tooltip, Badge } from "flowbite-react";
import { SlHome, SlTag, SlPeople  } from "react-icons/sl";
import useStore from '../store/store';

const BottonNavigation = () => {
    const cartItems = useStore((state) => state.cartItems)

  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2">
        <div className="grid h-full max-w-lg grid-cols-4 justify-items-center mx-auto">
            <Tooltip content={"Home"} >
                <Link to={"/"} data-tooltip-target="tooltip-home" type="button" className="h-full inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 group">
                    <SlHome className='size-5 mb-1 text-gray-500 group-hover:text-blue-600' />
                </Link>
            </Tooltip>
            <Tooltip content={"Descubre"} >
                <Link to={"/discover"} data-tooltip-target="tooltip-wallet" type="button" className="h-full inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
                    <SlTag className='size-5 mb-1 text-gray-500 group-hover:text-blue-600' />
                </Link>
            </Tooltip>
            <Tooltip content={"Carrito"} >
                <Link to={"/cart"} data-tooltip-target="tooltip-settings" type="button" className="h-full inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 relative group">
                    <svg className="size-5 mb-1 text-gray-500 group-hover:text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.49594 23.28L4.31166 6.7207H20.659L21.4747 23.28H3.49594Z" stroke="currentColor"/>
                        <path d="M8.1604 10.1491L8.1604 5.55139C8.1604 4.40438 8.61605 3.30434 9.42711 2.49328C10.2382 1.68221 11.3382 1.22656 12.4852 1.22656C13.6322 1.22656 14.7323 1.68221 15.5433 2.49328C16.3544 3.30434 16.8101 4.40438 16.8101 5.55139V10.1491" stroke="currentColor"/>
                    </svg>
                    <div className={cartItems.length !== 0 ? "absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#1a56db] border-2 border-white rounded-full top-2 end-0" : 'hidden'}>{cartItems.length}</div>
                </Link>
            </Tooltip>
            <Tooltip content={"Perfil"} >
                <Link to={"/profile"} data-tooltip-target="tooltip-profile" type="button" className="h-full inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <SlPeople className='size-5 mb-1 text-gray-500 group-hover:text-blue-600' /> 
                </Link>
            </Tooltip>
            {/* <Tooltip content={"/create"}>            
                    <div className="flex items-center justify-center">
                    <Link to={} data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        <span className="absolute size-[1px] p-0 m-[-1px] overflow-hidden whitespace-nowrap border-0">New item</span>
                    </Link>
                    </div>
                </Tooltip>
            */}
        </div>
    </div>
  )
}

export default BottonNavigation