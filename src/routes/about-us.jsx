import React from 'react'

const AboutPage = () => {
  return (
    <section className="flex justify-center mt-10">
        <div className="flex flex-col justify-between gap-5 w-full max-w-[710px]">
            <div className="flex flex-col justify-between items-start gap-5 p-2 w-full">
                <h1 className="text-4xl font-bold">Nuestra historia</h1>
                <div className="inline-flex items-center justify-center w-full">
                    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                        <svg width="125" height="10" viewBox="0 0 125 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M62.5776 9.25429L67.1272 4.70469H124.979V4.4979H67.1272L62.5776 0L58.0797 4.4979H0.0206299V4.70469H58.0797L62.5776 9.25429ZM62.5776 0.3102L66.9204 4.60129L62.5776 8.94409L58.2348 4.60129L62.5776 0.3102Z" fill="#555555"/>
                        </svg>
                    </div>
                </div>
                <img src="https://images.pexels.com/photos/3727469/pexels-photo-3727469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dueña y fundadora del comercio"/>
                <p className="w-full h-auto text-left text-gray-500 text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quaerat aliquam beatae error impedit qui nulla tempore dolorem, eligendi perspiciatis odit. Cupiditate facere obcaecati ipsam deleniti eveniet consequuntur corrupti consectetur tenetur id iusto, dolor alias!</p>
                <p className="w-full h-auto text-left text-gray-500 text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quaerat aliquam beatae error impedit qui nulla tempore dolorem, eligendi perspiciatis odit. Cupiditate facere obcaecati ipsam deleniti eveniet consequuntur corrupti consectetur tenetur id iusto, dolor alias!</p>
            </div>
        </div>
    </section>
  )
}

export default AboutPage