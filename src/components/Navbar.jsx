import {useEffect} from 'react'

const Navbar = () => {
    // const [sesion]
    useEffect(()=>{

    },[])
  return (
    <section className="flex justify-between items-center py-5 px-2">
        <img src="/devto-light.svg" alt="logo" className="size-12"/>
        <nav className="flex justify-center items-center gap-5">
            <Link to={`/login`} className="h-[60px] text-base rounded-[20px] text-white focus:ring-4 font-medium px-10 py-4 hover:bg-gray-700 focus:outline-none focus:ring-gray-800" >Ingresar</Link>
            <Link to={`/register`} className="font-semibold py-4 px-10 rounded-[20px] text-base bg-call-to-action border-2 border-transparent hover:bg-blue-700" >Registrar</Link>
        </nav>
    </section>  
  )
}

export default Navbar