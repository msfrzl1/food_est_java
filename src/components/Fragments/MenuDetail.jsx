/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useGet from '../Hooks/useGet';
import { FaStar } from 'react-icons/fa';

export default function MenuDetail() {
   const [menus, setMenus] = useState({});
   const { getData } = useGet();
   const { id } = useParams();

   const getMenuDetail = async () => {
      const res = await getData(`menu/${id}`);
      setMenus(res.data.data);
   };

   useEffect(() => {
      getMenuDetail();
   }, []);

   return (
      <div className='min-h-screen pt-14'>
         <div className='container mx-auto px-4 lg:px-0'>
            <h1 className='font-briem font-black text-2xl lg:text-4xl text-center mb-3'>Menu Detail Foods Est Java</h1>
            <div className='flex items-center gap-1 text-sm mb-3 px-1'>
               <Link to={'/menus'}>
                  <p className='text-blue-500 font-semibold'>Menus</p>
               </Link>
               <p>&gt; {menus.name}</p>
            </div>
            <div className='flex md:flex-row flex-col gap-5 mb-4 tracking-widest'>
               <div className='flex-1'>
                  <img src={menus.imageUrl} alt={menus.name} className='lg:h-[450px] h-72 w-full object-cover rounded' />
               </div>
               <div className='flex-1 flex flex-col text-sm'>
                  <h1 className='font-bold text-2xl'>{menus.name}</h1>
                  <div className='flex items-center gap-1 mb-2'>
                     <FaStar className='text-orange-500' />
                     <FaStar className='text-orange-500' />
                     <FaStar className='text-orange-500' />
                     <FaStar className='text-orange-500' />
                     <FaStar className='text-orange-500' />
                     <p className='text-xs font-semibold'>(5.0)</p>
                  </div>
                  <p className='text-3xl text-green-500 mb-2'>{menus.priceFormatted}</p>
                  <div className='border-b-2 mb-3' />
                  <div className='border rounded bg-slate-600 text-white font-semibold'>
                     <p className='p-2 text-xl'>Description</p>
                     <p className='p-2'>{menus.description}</p>
                     <p className='p-2 text-xl'>Type menu</p>
                     <p className='p-2'>{menus.type}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
