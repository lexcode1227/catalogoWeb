import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from '../../config';
import MainCarousel from "../components/MainCarousel";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import { MarqueeDemo } from "../components/MarqueeComp";
// import useStore from "../store/store";
import icon1 from "../assets/Sticker1.svg"
import icon2 from "../assets/Sticker2.svg"
import icon3 from "../assets/Sticker3.svg"
import icon4 from "../assets/Sticker4.svg"
import { IoLogoInstagram } from "react-icons/io5";
import CreatorCard from "../components/CreatorCard";
import SubCategories from "../components/SubCategories";

const HomePage = () => {
    const [newArrival, setNewArrival] = useState([])
    const [categories, setCategories] = useState([])
    const [steps, setSteps] = useState([])
    const [creators, setCreators] = useState([])
    // const allCategories = useStore((state) => state.categories)

    useEffect(()=>{
      setNewArrival([
        {
          _id: "668c2dd0e9973ee30adc3ebd",
          name: "Camisa Polo",
          category: "Hombres",
          subCategory: "Camisas",
          price: 15.49,
          images: [
            "https://siman.vtexassets.com/arquivos/ids/4913680-1600-auto?v=638351373749570000&width=1600&height=auto&aspect=true",
            "https://siman.vtexassets.com/arquivos/ids/4913687-1600-auto?v=638351373760670000&width=1600&height=auto&aspect=true",
            "https://siman.vtexassets.com/arquivos/ids/4913685-1600-auto?v=638351373758300000&width=1600&height=auto&aspect=true"
          ],
          stockInfo: [
            {
              size: "S",
              color: "Blanca",
              stock: 10,
              _id: "668c2f30b6f00503e88fa2b2"
            },
            {
              size: "M",
              color: "Blanca",
              stock: 5,
              _id: "668c2f30b6f00503e88fa2b3"
            },
            {
              size: "L",
              color: "Blanco",
              stock: 5,
              _id: "668c2f30b6f00503e88fa2b4"
            },
            {
              size: "S",
              color: "Azul",
              stock: 8,
              _id: "668c2f30b6f00503e88fa2b5"
            },
            {
              size: "M",
              color: "Azul",
              stock: 7,
              _id: "668c2f30b6f00503e88fa2b6"
            }
          ]
        },
        {
          _id: "6690e018ae5b28477ab34f06",
          name: "Levi's Camiseta casual blanca estampado vintage para hombre",
          category: "Hombres",
          subCategory: "Camisas",
          price: 15.49,
          images: [
            "https://siman.vtexassets.com/arquivos/ids/4162758-1600-auto?v=638175236086330000&width=1600&height=auto&aspect=true",
            "https://siman.vtexassets.com/arquivos/ids/4162760-1600-auto?v=638175236094000000&width=1600&height=auto&aspect=true"
          ],
          stockInfo: [
            {
              size: "S",
              color: "Blanco",
              stock: 10,
              _id: "6690e018ae5b28477ab34f07"
            },
            {
              size: "M",
              color: "Blanco",
              stock: 8,
              _id: "6690e018ae5b28477ab34f08"
            },
            {
              size: "L",
              color: "Blanco",
              stock: 7,
              _id: "6690e018ae5b28477ab34f09"
            },
            {
              size: "S",
              color: "Azul",
              stock: 5,
              _id: "6690e018ae5b28477ab34f0a"
            },
            {
              size: "M",
              color: "Azul",
              stock: 3,
              _id: "6690e018ae5b28477ab34f0b"
            },
            {
              size: "L",
              color: "Celeste",
              stock: 2,
              _id: "6690e018ae5b28477ab34f0c"
            }
          ]
        },
        {
          _id: "66920f3ab9eac8ab071c9d0d",
          name: "Calzoneta de baño estampada para hombre",
          category: "Hombres",
          subCategory: "Shorts",
          price: 24.95,
          images: [
            "https://siman.vtexassets.com/arquivos/ids/4091291-1600-auto?v=638155338034870000&width=1600&height=auto&aspect=true",
            "https://siman.vtexassets.com/arquivos/ids/4091289-1600-auto?v=638155338027530000&width=1600&height=auto&aspect=true",
            "https://siman.vtexassets.com/arquivos/ids/4091288-1600-auto?v=638155338023130000&width=1600&height=auto&aspect=true"
          ],
          stockInfo: [
            {
              size: "S",
              color: "Blanco",
              stock: 2,
              _id: "66920f3ab9eac8ab071c9d0e"
            },
            {
              size: "M",
              color: "Blanco",
              stock: 3,
              _id: "66920f3ab9eac8ab071c9d0f"
            },
            {
              size: "S",
              color: "Azul",
              stock: 5,
              _id: "66920f3ab9eac8ab071c9d10"
            },
            {
              size: "M",
              color: "Azul",
              stock: 3,
              _id: "66920f3ab9eac8ab071c9d11"
            }
          ]
        },
        {
          _id: "669213074a8358506a401f96",
          name: "HIDRA-TOTAL 5 Crema de día - Crema humectante",
          category: "Mujeres",
          subCategory: "Skin Care",
          price: 13.95,
          images: [
            "https://siman.vtexassets.com/arquivos/ids/370545-1600-auto?v=637250972188800000&width=1600&height=auto&aspect=true",
            "https://siman.vtexassets.com/arquivos/ids/5194087-1600-auto?v=638436913742670000&width=1600&height=auto&aspect=true",
            "https://siman.vtexassets.com/arquivos/ids/5194089-1600-auto?v=638436913996330000&width=1600&height=auto&aspect=true"
          ],
          stockInfo: [
            {
              size: "none",
              color: "none",
              stock: 5,
              _id: "669213074a8358506a401f97"
            }
          ]
        },
        {
          _id: "669216234a8358506a401fab",
          name: "Créme Hydratante et Nourrissante Crema corporal y rostro",
          category: "Mujeres",
          subCategory: "Skin Care",
          price: 7,
          images: [
            "https://siman.vtexassets.com/arquivos/ids/3323805-1600-auto?v=637981643829130000&width=1600&height=auto&aspect=true",
            "https://siman.vtexassets.com/arquivos/ids/924708-1600-auto?v=637394934673930000&width=1600&height=auto&aspect=true"
          ],
          stockInfo: [
            {
              size: "none",
              color: "none",
              stock: 3,
              _id: "669216234a8358506a401fac"
            }
          ]
        },
        {
          _id: "669216644a8358506a401faf",
          name: "Crema Hidratante Corporal Flor de Vainilla Mediterranea",
          category: "Mujeres",
          subCategory: "Skin Care",
          price: 7,
          images: [
            "https://siman.vtexassets.com/arquivos/ids/2626617-1600-auto?v=637806394273830000&width=1600&height=auto&aspect=true"
          ],
          stockInfo: [
            {
              size: "none",
              color: "none",
              stock: 2,
              _id: "669216644a8358506a401fb0"
            }
          ]
        },
      ])
      setCategories([
        {
          _id: "6690e128ae5b28477ab34f33",
          name: "Mujeres",
          categoryCover: "https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg",
          subCategories: [
            {
              subCategoryName: "Accesorios",
              subCategoryCover: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg",
              _id: "6690e128ae5b28477ab34f34"
            },
            {
              subCategoryName: "Camisetas",
              subCategoryCover: "https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg",
              _id: "6690e128ae5b28477ab34f35"
            },
            {
              subCategoryName: "Juveniles",
              subCategoryCover: "https://siman.vtexassets.com/arquivos/ids/5925479-1200-auto?v=638557263926900000&width=1200&height=auto&aspect=true",
              _id: "6690e128ae5b28477ab34f36"
            },
            {
              subCategoryName: "Ropa Interior",
              subCategoryCover: "https://siman.vtexassets.com/arquivos/ids/5525845-1600-auto?v=638515497802800000&width=1600&height=auto&aspect=true",
              _id: "6690e128ae5b28477ab34f37"
            },
            {
              subCategoryName: "Skin Care",
              subCategoryCover: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
              _id: "6690e128ae5b28477ab34f38"
            }
          ]
        },
        {
          _id: "6690e1c3ae5b28477ab34f41",
          name: "Hombres",
          categoryCover: "https://siman.vtexassets.com/arquivos/ids/5398898-1600-auto?v=638485353697030000&width=1600&height=auto&aspect=true",
          subCategories: [
            {
              subCategoryName: "Accesorios",
              subCategoryCover: "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
              _id: "6690e1c3ae5b28477ab34f42"
            },
            {
              subCategoryName: "Camisas",
              subCategoryCover: "https://siman.vtexassets.com/arquivos/ids/5398898-1600-auto?v=638485353697030000&width=1600&height=auto&aspect=true",
              _id: "6690e1c3ae5b28477ab34f43"
            },
            {
              subCategoryName: "Shorts",
              subCategoryCover: "https://siman.vtexassets.com/arquivos/ids/5376145-1600-auto?v=638481794239030000&width=1600&height=auto&aspect=true",
              _id: "6690e1c3ae5b28477ab34f44"
            },
            {
              subCategoryName: "Mochilas",
              subCategoryCover: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
              _id: "6690e1c3ae5b28477ab34f45"
            }
          ]
        },
      ])
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
                <Link to={"/discover"} className="flex gap-2 text-2xl m-2">
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