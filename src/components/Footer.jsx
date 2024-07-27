import React from 'react'
import { FaYoutube, FaTwitter  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
    const data = new Date()
    const now = data.getFullYear()
  return (
    <div className='flex flex-col gap-2 max-w-[1050px] my-16'>
        <div className='flex justify-center items-center gap-5 w-full mb-5'>
            <img src={"/Logo.svg"} alt="logo" className="w-40 h-auto"/>
        </div>
        <div className="inline-flex items-center justify-center w-full">
                <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                    <svg width="125" height="10" viewBox="0 0 125 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M62.5776 9.25429L67.1272 4.70469H124.979V4.4979H67.1272L62.5776 0L58.0797 4.4979H0.0206299V4.70469H58.0797L62.5776 9.25429ZM62.5776 0.3102L66.9204 4.60129L62.5776 8.94409L58.2348 4.60129L62.5776 0.3102Z" fill="#555555"/>
                    </svg>
                </div>
        </div>
        <div className='flex flex-col items-center gap-2 w-full mt-5'>
            <p className='text-base text-body'>Siguenos en:</p>
            <article className='w-1/2 flex justify-between'>
                <FaYoutube className='text-body size-10'/>
                <FaTwitter className='text-body size-10'/>
                <AiFillInstagram className='text-body size-10'/>
            </article>
        </div>
        <nav className='flex justify-between mb-5'>
            <Link to={"/about-us"} className="text-bodyL leading-bodyL rounded-[20px] text-titleActive focus:ring-4 p-4 focus:outline-none focus:ring-gray-800" >Sobre nosotros</Link>
            <Link to={"/contact"} className="text-bodyL leading-bodyL rounded-[20px] text-titleActive focus:ring-4 p-4 focus:outline-none focus:ring-gray-800" >Contacto</Link>
            <Link to={"/blog"} className="text-bodyL leading-bodyL rounded-[20px] text-titleActive focus:ring-4 p-4 focus:outline-none focus:ring-gray-800" >Blog</Link>
        </nav>
        <div className="inline-flex items-center justify-center w-full">
                <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                    <svg width="125" height="10" viewBox="0 0 125 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M62.5776 9.25429L67.1272 4.70469H124.979V4.4979H67.1272L62.5776 0L58.0797 4.4979H0.0206299V4.70469H58.0797L62.5776 9.25429ZM62.5776 0.3102L66.9204 4.60129L62.5776 8.94409L58.2348 4.60129L62.5776 0.3102Z" fill="#555555"/>
                    </svg>
                </div>
        </div>
        <p className='text-base text-body text-center pt-2.5 mt-5'>Copyright Ⓒ {now} All Rights Reserved.</p>
    </div>
  )
}

export default Footer