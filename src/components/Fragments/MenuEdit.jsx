/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import FormInput from '../Elements/FormInput';
import useGet from './../Hooks/useGet';
import useEdit from './../Hooks/useEdit';

export default function MenuEdit() {
   const [menu, setMenu] = useState();
   const [imageUrl, setImageUrl] = useState(null);
   const { getData } = useGet();
   const { editData } = useEdit();
   const { id } = useParams();
   const navigate = useNavigate();

   const getMenu = async () => {
      const res = await getData(`menu/${id}`);
      setMenu(res.data.data);
   };

   const handleUpdate = async (e) => {
      e.preventDefault();
      const data = {
         name: e.target.name.value,
         description: e.target.description.value,
         type: e.target.type.value,
         imageUrl: imageUrl,
         price: Number(e.target.price.value),
      };

      const res = await editData(`menu/${id}`, data);
      if (res.status === 200) {
         setTimeout(() => {
            navigate('/menus');
         }, 2000);
         toast.success(res.data.message);
      } else {
         toast.error(res.response.data.message);
      }
   };

   const handleImage = (e) => {
      setImageUrl(e.target.value);
   };

   useEffect(() => {
      getMenu();
   }, []);

   return (
      <div className='min-h-screen pt-14 px-4 lg:px-0 pb-5'>
         <div className='container mx-auto'>
            <h1 className='font-briem font-black text-2xl lg:text-4xl text-center mb-7'>Edit Menu</h1>

            <div className='flex lg:flex-row flex-col gap-5'>
               <div className='flex-1 flex justify-center'>
                  <img src={imageUrl || menu?.imageUrl} alt='preview' className='lg:h-[420px] h-72 w-full object-cover rounded' />
               </div>
               <div className='flex-1 flex flex-col justify-center'>
                  <form onSubmit={handleUpdate} className='flex flex-col gap-3'>
                     <FormInput name={'name'} defaultValue={menu?.name} />
                     <FormInput name={'description'} defaultValue={menu?.description} />
                     <div className='border px-1 py-2'>
                        <select name={'type'}>
                           <option value='main-dish'>Makanan</option>
                           <option value='beverage'>Minuman</option>
                        </select>
                     </div>
                     <FormInput onChange={handleImage} name={'imageUrl'} defaultValue={menu?.imageUrl} />
                     <FormInput type={'number'} name={'price'} defaultValue={menu?.price} />
                     <button className='w-full bg-gradient-to-r from-[#a200a2] to-[#15bebe] px-2 py-2 rounded text-white font-semibold'>
                        Simpan
                     </button>
                  </form>
               </div>
            </div>
         </div>
         <ToastContainer
            position='top-center'
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            theme='dark'
         />
      </div>
   );
}
