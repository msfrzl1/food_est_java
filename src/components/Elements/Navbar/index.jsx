import { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { LiaBarsSolid } from 'react-icons/lia';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
   const [menu, setMenu] = useState(false);
   const navigate = useNavigate();

   const toggleMenu = () => {
      setMenu(!menu);
   };

   const token = localStorage.getItem('token');

   const logout = () => {
      localStorage.removeItem('token');
      navigate('/login');
   };

   return (
      <nav className='text-white bg-slate-900/90 backdrop-blur-sm fixed w-full navbar z-[1000]'>
         <div className='container mx-auto flex items-center justify-between px-3 lg:px-0 py-2'>
            <h1 className='font-briem font-black text-white text-md'>Foods Est Java</h1>
            <div className='hidden md:block'>
               <div className='flex items-center gap-3 text-sm font-semibold'>
                  <Link to={'/menus'} className='bg-gradient-to-r hover:from-[#a200a2] hover:to-[#15bebe] px-2 py-1 rounded text-white'>
                     Menus
                  </Link>
                  <Link to={'/menus/create-menu'} className='bg-gradient-to-r hover:from-[#a200a2] hover:to-[#15bebe] px-2 py-1 rounded text-white'>
                     Add Menu
                  </Link>
                  <div>
                     {token ? (
                        <Link
                           to={'/'}
                           className='bg-gradient-to-r hover:from-[#a200a2] hover:to-[#15bebe] px-2 py-1 rounded text-white'
                           onClick={logout}
                        >
                           Logout
                        </Link>
                     ) : (
                        <Link to={'/login'} className='bg-gradient-to-r hover:from-[#a200a2] hover:to-[#15bebe] px-2 py-1 rounded text-white'>
                           Login
                        </Link>
                     )}
                  </div>
               </div>
            </div>
            <button className='md:hidden' onClick={toggleMenu}>
               <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  {menu ? <CgClose size={25} /> : <LiaBarsSolid size={25} />}
               </svg>
            </button>
         </div>
         {menu && (
            <div className='flex flex-col px-2 pb-2 gap-1 text-sm w-full md:hidden'>
               <Link to={'/menus'} className='bg-gradient-to-r hover:from-[#a200a2] hover:to-[#15bebe] px-2 py-1 rounded text-white'>
                  Menus
               </Link>
               <Link to={'/menus/create-menu'} className='bg-gradient-to-r hover:from-[#a200a2] hover:to-[#15bebe] px-2 py-1 rounded text-white'>
                  Add Menu
               </Link>
               {token ? (
                  <Link to={'/'} className='bg-gradient-to-r hover:from-[#a200a2] hover:to-[#15bebe] px-2 py-1 rounded text-white' onClick={logout}>
                     Logout
                  </Link>
               ) : (
                  <Link to={'/login'} className='bg-gradient-to-r hover:from-[#a200a2] hover:to-[#15bebe] px-2 py-1 rounded text-white'>
                     Login
                  </Link>
               )}
            </div>
         )}
      </nav>
   );
}
