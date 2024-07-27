import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainCarousel from "../components/MainCarousel";
import ProductCard from "../components/ProductCard";
import { MarqueeDemo } from "../components/MarqueeComp";
import icon1 from "../assets/Sticker1.svg"
import icon2 from "../assets/Sticker2.svg"
import icon3 from "../assets/Sticker3.svg"
import icon4 from "../assets/Sticker4.svg"
import { IoLogoInstagram } from "react-icons/io5";
import CreatorCard from "../components/CreatorCard";
import SubCategories from "../components/SubCategories";
import useStore from "../store/store";

const HomePage = () => {
    const [newArrival, setNewArrival] = useState([])
    const [steps, setSteps] = useState([])
    const [creators, setCreators] = useState([])
    const products = useStore((state) => state.products)
    const categories = useStore((state) => state.categories) 

    useEffect(()=>{
      setNewArrival(products.slice(4,10))
      setSteps([
        {
          title: "Fast shipping. Free on orders over $25.",
          icon: icon1
        },
        {
          title: "Sustainable process from start to finish.",
          icon: icon2
        },
        {
          title: "Unique designs and high-quality materials.",
          icon: icon3
        },
        {
          title: "Fast shipping. Free on orders over $25.",
          icon: icon4
        },
      ])
      setCreators(
        [
          {
            ranking: 1,
            userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
            username: "lexcode",
            totalSales: "99.53"
          },
          {
            ranking: 2,
            userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
            username: "lexcode",
            totalSales: "44.95"
          },
          {
            ranking: 3,
            userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
            username: "lexcode",
            totalSales: "34.00"
          },
          {
            ranking: 4,
            userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
            username: "lexcode",
            totalSales: "89.60"
          }
        ]
      )
    }, [])
    return (
      <>
        <section className="flex justify-center">
          <MainCarousel/>
        </section>
        <section className="flex justify-center my-14">
              <div className="flex flex-col justify-between items-center gap-4 w-full max-w-[710px]">
                <h3 className="text-center text-4xl font-bold">Recién ingresadas</h3>
                <div className="grid grid-cols-2 gap-5">
                  {newArrival.map((item)=> (
                    <ProductCard key={item._id} title={item.name} productImage={item.images[0]} price={item.price} linkTo={item._id} />
                  ))}
                </div>
                <Link to={"/discover"} className="flex gap-2 text-2xl m-2 underline hover:no-underline ">
                  Explorar Más... 
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2827 5L20.9998 12L14.2827 19" stroke="#14142B"/>
                    <line x1="20.6279" y1="12.1089" x2="2.89487" y2="12.1089" stroke="#14142B"/>
                  </svg>
                </Link>
              </div>
        </section>
        <section className="flex justify-center my-14">
              <div className="flex flex-col justify-between items-center gap-4 w-full max-w-[710px]">
                <h3 className="text-center text-4xl font-bold">Categorias</h3>
                <div className="flex flex-col gap-y-14 gap-x-2">
                  {categories.map((item)=> (
                    <SubCategories key={item._id} name={item.name} categoryCover={item.categoryCover} subCategories={item.subCategories} />
                  ))}
                </div>
              </div>
        </section>
        <section className="flex justify-center my-14">
              <div className="flex flex-col justify-between items-center gap-4 w-full max-w-[710px]">
                <h3 className="text-center text-4xl font-bold">Marcas importadas</h3>
                <MarqueeDemo/>
              </div>
        </section>
        <section className="flex justify-center my-14">
          <div className="flex flex-col justify-between items-center gap-4 w-full max-w-[710px]">
            <h3 className="text-4xl font-bold">Proceso de compra</h3>
            <h4 className="text-2xl font-normal">Making a luxurious lifestyle accessible for a generous group of women is our daily drive.</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                { steps?.map((item, index) => (
                  <ProductCard key={item.title+"-"+index} title={item.title} productImage={item.icon} iconTitle /> 
                ))}
            </div>
          </div>
        </section>
        <section className="flex justify-center my-14">
          <div className="flex flex-col justify-between items-center gap-4 w-full max-w-[710px]">
            <h3 className="text-4xl font-bold">Siguenos en Instagram</h3>
            <h4 className="text-2xl font-normal">Recién posteados</h4>
            <IoLogoInstagram size={32}/>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                { creators?.map((item) => (
                  <CreatorCard key={item.ranking} ranking={item.ranking} userImage={item.userImage} username={item.username} totalSales={item.totalSales} /> 
                ))}
            </div>
          </div>
        </section>
      </>
    );
}

export default HomePage