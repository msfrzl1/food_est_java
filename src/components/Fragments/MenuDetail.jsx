/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useGet from '../Hooks/useGet';

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
      <div className='min-h-screen'>
         <div className='container mx-auto px-4 lg:px-0'>
            <h1 className='font-briem font-black text-2xl lg:text-4xl text-center py-9'>Menu Detail Foods Est Java</h1>
            <div className='flex items-center gap-1 text-sm mb-2 px-1'>
               <Link to={'/menus'}>
                  <p className='text-blue-500 font-semibold'>Menus</p>
               </Link>
               <p>&gt; {menus.name}</p>
            </div>
            <div className='flex md:flex-row flex-col gap-5 border rounded bg-slate-50 tracking-widest'>
               <div className='flex-1'>
                  <img src={menus.imageUrl} alt={menus.name} className='lg:h-[450px] h-72 w-full object-cover rounded' />
               </div>
               <div className='flex-1 flex flex-col justify-center gap-2 text-sm'>
                  <h1>
                     <span className='font-bold'>Name : </span>
                     {menus.name}
                  </h1>
                  <p>
                     <span className='font-bold'>Description : </span>
                     {menus.description}
                  </p>
                  <p>
                     <span className='font-bold'>Price : </span>
                     {menus.priceFormatted}
                  </p>
                  <p>
                     <span className='font-bold'>Type : </span>
                     {menus.type}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
