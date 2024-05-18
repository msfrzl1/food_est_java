import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import FormInput from '../Elements/FormInput';
import usePost from '../Hooks/usePost';
import { useState } from 'react';

export default function CreateMenu() {
   const [imageUrl, setImageUrl] = useState('');
   const { postData } = usePost();
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
         name: e.target.name.value,
         description: e.target.description.value,
         type: e.target.type.value,
         imageUrl: imageUrl,
         price: Number(e.target.price.value),
      };

      const res = await postData('menu', data);
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

   return (
      <div className='min-h-screen pt-14 px-4 lg:px-0 pb-5'>
         <div className='container mx-auto'>
            <h1 className='font-briem font-black text-2xl lg:text-4xl text-center mb-7'>Create Menu</h1>
            <div className='flex lg:flex-row flex-col gap-5'>
               <div className='flex-1 flex justify-center'>
                  {imageUrl ? (
                     <img src={imageUrl} alt='preview' className='lg:h-[450px] h-72 w-full object-cover rounded' />
                  ) : (
                     <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWTwYdFl_1HsRhi-S54y15xmQF6yBjBSnKUa3v62sNQ&s'
                        alt='preview'
                        className='w-[450px] h-[450px] object-cover rounded border'
                     />
                  )}
               </div>
               <div className='flex-1 flex flex-col justify-center'>
                  <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                     <FormInput name={'name'} placeholder={'Masukan Nama Menu'} />
                     <FormInput name={'description'} placeholder={'Masukan Deskripsi'} />
                     <div className='border px-1 py-2'>
                        <select name={'type'}>
                           <option>Pilih Makanan / Minuman</option>
                           <option value='main-dish'>Makanan</option>
                           <option value='beverage'>Minuman</option>
                        </select>
                     </div>
                     <FormInput onChange={handleImage} name={'imageUrl'} placeholder={'Masukan Url Gambar'} />
                     <FormInput type={'number'} name={'price'} placeholder={'Masukan Harga'} />
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
