import {useState, useEffect} from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Navbar } from "flowbite-react";
import Footer from "../components/Footer";
import BottonNavigation from '../components/BottonNavigation';
import { API_URL } from '../../config';
import useStore from '../store/store';

export default function Root() {
  // const [userData, setUserData] = useState(null)
  // const token = Cookies.get('authToken');
  // const navigate = useNavigate();
  const setProducts = useStore((state) => state.setProducts)
  // const setCategories = useStore((state) => state.setCategories)

  const handleLogout = () => {
      Cookies.remove('authToken');
      navigate('/login');
    };

    useEffect( ()=>{
      async function fetchData(){
          const res = await fetch(`${API_URL}/api/product`)
          const result = await res.json()
          // setUserData(result.data);
          setProducts(result.data);
          // const resCategories = await fetch(`${API_URL}/api/category`)
          // const resultCategories = await resCategories.json()
          // setCategories(resultCategories.data);
      }
      fetchData()
    },[])

    return (
      <>
        <main className="bg-background text-text min-h-screen font-alternative p-4 flex flex-col">
            <header className='flex justify-center items-center'>              
              <Navbar className='py-5 w-full max-w-[710px]' fluid rounded>
                <Navbar.Toggle />
                <Navbar.Brand as={Link} href={"/"}>
                  <img src="/src/assets/Logo.svg" className="mr-3 w-36 h-14" alt="Logo" />
                </Navbar.Brand>
                <nav className="flex justify-between items-center gap-5">
                      <Link to={"/discover"} className="text-base rounded-[20px] text-titleActive focus:ring-4 font-medium"><img src="/src/assets/Search.svg" alt="logo" className="size-6"/></Link>
                      <Link to={"/cart"} className="text-base rounded-[20px] text-titleActive focus:ring-4 font-medium"><img src="/src/assets/ShoppingBag.svg" alt="logo" className="size-6"/></Link>
                </nav>
                <Navbar.Collapse>
                  <Navbar.Link href="#" className='text-white bg-blue-500' active>
                    Inicio
                  </Navbar.Link>
                  <Navbar.Link as={Link} href="#">
                    Sobre Nosotros
                  </Navbar.Link>
                  <Navbar.Link href="#">Blog</Navbar.Link>
                  <Navbar.Link href="#">Contacto</Navbar.Link>
                </Navbar.Collapse>
              </Navbar>
            </header>
            <Outlet/>
            <section className="flex justify-center">
              <Footer/>
            </section>
            <section className="flex justify-center">
              <BottonNavigation/>
            </section>
        </main>
      </>
    );
  }