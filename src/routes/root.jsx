import { Outlet, Link } from 'react-router-dom';
import { Navbar } from "flowbite-react";
import Footer from "../components/Footer";
import BottonNavigation from '../components/BottonNavigation';
import Logo from '../assets/Logo.svg'
import SearchIcon from '../assets/Search.svg'
import ShoppingBag from '../assets/ShoppingBag.svg'

export default function Root() {
    return (
      <>
        <main className="bg-background text-text min-h-screen font-alternative p-4 flex flex-col">
            <header className='flex justify-center items-center'>              
              <Navbar className='py-5 w-full max-w-[710px]' fluid rounded>
                <Navbar.Toggle />
                <Navbar.Brand as={"button"}>
                  <Link to={"/"}><img src={Logo} className="mr-3 w-36 h-14" alt="Logo" /></Link>
                </Navbar.Brand>
                <nav className="flex justify-between items-center gap-5 md:order-2">
                      <Link to={"/discover"} className="text-base rounded-[20px] text-titleActive focus:ring-4 font-medium"><img src={SearchIcon} alt="logo" className="size-6"/></Link>
                      <Link to={"/cart"} className="text-base rounded-[20px] text-titleActive focus:ring-4 font-medium"><img src={ShoppingBag} alt="logo" className="size-6"/></Link>
                </nav>
                <Navbar.Collapse>
                  <Navbar.Link as={"button"} className='text-lg'><Link to={"/"}>Inicio</Link></Navbar.Link>
                  <Navbar.Link as={"button"} className='text-lg'><Link to={"/about-us"}>Sobre Nosotros</Link></Navbar.Link>
                  <Navbar.Link as={"button"} className='text-lg'><Link to={"/blog"}>Blog</Link></Navbar.Link>
                  <Navbar.Link as={"button"} className='text-lg'><Link to={"/contact"}>Contacto</Link></Navbar.Link>
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