import { useCallback, useEffect, useRef, useState } from "react";
import { Tabs  } from "flowbite-react";
import ProductCard from "../components/ProductCard";
import useStore from "../store/store";

export default function DiscoverPage () {
    const tabsRef = useRef(null);
    // const {products, categories} = useLoaderData();
    const products = useStore((state) => state.products)
    const categories = useStore((state) => state.categories)

    const [selectedCategory, setSelectedCategory] = useState('Mujeres');
    const [selectedSubCategory, setSelectedSubCategory] = useState('Todos');
    const [filteredCards, setFilteredCards] = useState([]);
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleTabChange = useCallback((tab) => {
      setSelectedSubCategory('Todos');
      if (tab === 0) {
        setSelectedCategory('Mujeres');
      } else {
        setSelectedCategory('Hombres');
      }
    }, []);
    const filterProductsBySubCategory = (subCategory) => {
      setSelectedSubCategory(subCategory)
    };

    useEffect(()=> {
      if (selectedSubCategory === "Todos") {
          return setFilteredCards(products.filter(card => card.category === selectedCategory))
      }
      setFilteredCards(products.filter(card => card.subCategory === selectedSubCategory && card.category === selectedCategory ))
    }, [selectedCategory, selectedSubCategory, search])
    
    useEffect(() => {
      if (search.length !== 0 ) {
        const searchLower = search.toLowerCase();
        setFilteredCards(products.filter(card => card.name.toLowerCase().startsWith(searchLower)))
      }
    }, [search]);

    return (
        <>
          <section className="flex justify-center">
            <div className="flex flex-col justify-between gap-5 w-full max-w-[710px]">
              <div className="flex flex-col justify-between items-start gap-5 p-2 w-full">
                  <h1 className="text-4xl font-bold">Descubre nueva ropa</h1>
                  <h2 className="w-full h-auto text-left text-2xl">Encuentra a traves de nuestro ecommerce las prendas que necesites para complementar tus nuevos outfits.</h2>
              </div>  
              <form className="w-full mx-auto gap-2">   
                  <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only text-white">Search</label>
                  <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                          </svg>
                      </div>
                      <input type="search" id="default-search" className="block w-full p-4 ps-10 text-title text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Busca las prendas que necesites..." value={search} onChange={handleChange} required/>
                      {/* <button type="submit" className="h-full text-white absolute end-0 bottom-0 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-title p-4">Search</button> */}
                  </div>
              </form>
              <div className="flex flex-col justify-between w-full max-w-[710px]">
                  <Tabs aria-label="Default tabs" variant="default" className="text-title" ref={tabsRef} onActiveTabChange={handleTabChange}>
                    {categories.map((categ)=> (
                        <Tabs.Item key={categ._id} title={categ.name} className="text-title">
                          <div className="flex items-center justify-between py-4 md:py-8 flex-wrap">
                            <button type="button" className="text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-call-to-action rounded-full text-title font-medium px-5 py-2.5 text-center me-3 mb-3" onClick={()=> filterProductsBySubCategory('Todos')}>Todos</button>
                            {categ.subCategories?.map((item)=>(
                                <button key={item._id} type="button" className="text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-call-to-action rounded-full text-title font-medium px-5 py-2.5 text-center me-3 mb-3" onClick={()=> filterProductsBySubCategory(item.subCategoryName)}>{item.subCategoryName}</button>
                            ))}
                          </div>
                          <div className={`grid ${(filteredCards.length !== 0) ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1 h-screen'} gap-4`}>
                            {(filteredCards.length !== 0) ? filteredCards.map((item) => (
                                <ProductCard key={item._id} title={item.name} productImage={item.images[0]} price={item.price} linkTo={item._id} />
                            )) : <h3 className="w-full font-bold text-justify">No hay productos que mostrar.</h3>}
                          </div>
                        </Tabs.Item>
                    ))}
                  </Tabs>
              </div>
            </div>
          </section>
        </>
    )
}