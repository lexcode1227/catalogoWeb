import { useState, useEffect } from 'react'
import { Carousel } from "flowbite-react";
import ProductCard from "../components/ProductCard";
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import { SlSizeFullscreen } from "react-icons/sl";
import { useLoaderData } from 'react-router-dom';
import useStore from '../store/store';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import SimpleGallery from '../libs/photoSwipe';

const ProductPage = () => {
    // const [carouselImages, setCarouselImages] = useState([])
    const [relatedProducts, setRelatedProducts] = useState([])
    const productInformation = useLoaderData();
    const addToCart = useStore((state) => state.addToCart)
    const products = useStore((state) => state.products)
    const product = productInformation;

    const addProductToCart = ()=> {
        addToCart(product)
    }

    useEffect(()=>{
        setRelatedProducts(products.filter(item => item.subCategory === product.subCategory && item._id !== product._id))
    },[product])
  return (
    <>
        <section className='flex flex-col justify-center items-center relative'>
            <div className="h-96 sm:h-[35rem] lg:h-[40rem] w-full max-w-[710px]">
                <Carousel slide={false} leftControl={<FaChevronLeft color='black'/>} rightControl={<FaChevronRight color='black'/>} >
                    {product.images.map((item, index)=> (
                        <article key={index}>
                            <img src={item} alt={'imagen del producto'} className='object-fill'/>
                        </article>
                    ))}
                </Carousel>
            </div>
            <div className="max-w-[710px] px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:gap-8 xl:gap-16">
                    <div className="mt-6 sm:mt-8 lg:mt-0">
                        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                            {product.name}
                        </h1>
                        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                            <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                                ${product.price.toFixed(2)}
                            </p>
                        </div>

                        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                            <button className="w-full text-white mt-4 sm:mt-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-title px-5 py-2.5 flex items-center justify-center" onClick={addProductToCart}>
                                <svg className="w-5 h-5 -ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"/>
                                </svg>
                                Add to cart
                            </button>
                        </div>

                        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                        <p className="mb-6 text-gray-500 text-title">
                            Studio quality three mic array for crystal clear calls and voice
                            recordings. Six-speaker sound system for a remarkably robust and
                            high-quality audio experience. Up to 256GB of ultrafast SSD storage.
                        </p>

                        <p className="text-gray-500 text-title">
                            Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
                            Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
                            Magic Keyboard or Magic Keyboard with Touch ID.
                        </p>
                    </div>
                </div>
            </div> 
        </section> 
        <section className='flex flex-col justify-center items-center my-14'>
            <div className="flex flex-col justify-between gap-4 max-w-[710px]">
                <h3 className="text-center text-4xl font-bold">Podrian gustarte</h3>
                <div className="grid grid-cols-2 gap-5">
                  {relatedProducts.map((item)=> (
                    <ProductCard key={item._id} title={item.name} productImage={item.images[0]} price={item.price} linkTo={item._id} />
                  ))}
                </div>
            </div>
        </section>
        {/* <section className='flex flex-col justify-center'>
            <div className="h-96 xl:h-80 2xl:h-96 w-full max-w-[1050px]">
                <Carousel slide={false}>
                    <Gallery>
                    {carouselImages.map((item, index) => (
                        <article className='relative' key={index}>
                            <img src={item.image} alt={item.title} />
                            <div className='absolute bottom-5 right-1/4'>
                                <Item
                                    original={item.image}
                                    thumbnail={item.image}
                                    width="1024"
                                    height="768"
                                    object-fit="contain"
                                >
                                    {({ ref, open }) => (
                                        <button ref={ref} onClick={open}>
                                            <SlSizeFullscreen />
                                        </button>
                                    )}
                                </Item>
                            </div>
                        </article>
                    ))}
                    </Gallery>
                </Carousel>
            </div>
        </section>  */}
        {/* <div>
            <SimpleGallery
                galleryID="my-test-gallery"
                images={[
                    {
                    largeURL:
                        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
                    thumbnailURL:
                        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
                    width: 1875,
                    height: 2500,
                    },
                    {
                    largeURL:
                        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
                    thumbnailURL:
                        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
                    width: 1669,
                    height: 2500,
                    },
                    {
                    largeURL:
                        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
                    thumbnailURL:
                        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
                    width: 2500,
                    height: 1666,
                    },
                ]}
            />
        </div> */}
    </>

  )
}

export default ProductPage