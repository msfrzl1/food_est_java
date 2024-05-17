/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useGet from './../Hooks/useGet';

export default function Menu() {
   const [menus, setMenus] = useState([]);
   const [pagination, setPagination] = useState({
      currentPage: 1,
      lastPage: 0,
      nextPage: 0,
      prevPage: 0,
      total: 0,
   });
   const { getData } = useGet();

   const getMenus = async () => {
      const res = await getData(`menus?page=${pagination.currentPage}`);
      setMenus(res.data.data.Data);
      setPagination({
         perPage: res.data.data.perPage,
         currentPage: res.data.data.currentPage,
         nextPage: res.data.data.nextPage,
         previousPage: res.data.data.previousPage,
         total: res.data.data.total,
      });
   };

   const handleBack = () => {
      setPagination({
         ...pagination,
         currentPage: pagination.previousPage,
      });
   };

   const handleNext = () => {
      setPagination({
         ...pagination,
         currentPage: pagination.nextPage,
      });
   };

   useEffect(() => {
      getMenus();
   }, []);

   useEffect(() => {
      getMenus();
   }, [pagination.currentPage]);

   const cutDescription = (description) => {
      if (description.length > 50) {
         return description.substring(0, 50) + '...';
      }
      return description;
   };

   return (
      <div>
         <div className='container mx-auto px-2 lg:px-0 mb-2'>
            <h1 className='font-briem font-black text-2xl lg:text-4xl text-center py-10'>Menu Foods Est Java</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
               {menus.map((menu) => (
                  <div key={menu.id} className='m-2'>
                     <Link to={`/menus/${menu.id}`}>
                        <div className='relative border rounded overflow-hidden shadow-md'>
                           <img src={menu.imageUrl} alt={menu.name} className='w-full h-56 object-cover' />
                           <div className='flex flex-col p-2 h-auto'>
                              <h1 className='font-black text-xl mb-1 tracking-widest'>{menu.name}</h1>
                              <p className='text-xs'>{cutDescription(menu.description)}</p>
                              <div className='absolute top-2 right-2 bg-gradient-to-r from-[#15bebe] to-[#a200a2] text-white px-2 py-1 rounded-full'>
                                 <p className='text-xs font-semibold'>{menu.priceFormatted}</p>
                              </div>
                              <div className='absolute top-2 left-2 bg-gradient-to-r from-[#15bebe] to-[#a200a2] text-white px-2 py-1 rounded-full'>
                                 <p className='text-xs tracking-widest'>{menu.type}</p>
                              </div>
                           </div>
                        </div>
                     </Link>
                  </div>
               ))}
            </div>
            <div className='flex items-center justify-center mt-5 gap-5 tracking-widest'>
               <button
                  onClick={handleBack}
                  disabled={pagination.currentPage === 1}
                  className='px-3 py-2 bg-gradient-to-r from-[#15bebe] to-[#a200a2] hover:from-[#a200a2] hover:to-[#15bebe] disabled:opacity-60 text-white font-bold rounded'
               >
                  &lt;-- Back
               </button>
               <button
                  onClick={handleNext}
                  disabled={!pagination.nextPage}
                  className='px-3 py-2 bg-gradient-to-r from-[#15bebe] to-[#a200a2] hover:from-[#a200a2] hover:to-[#15bebe] disabled:opacity-60 text-white font-bold rounded'
               >
                  Next --&gt;
               </button>
            </div>
         </div>
      </div>
   );
}
