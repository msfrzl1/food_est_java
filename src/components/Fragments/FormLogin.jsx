import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormInput from '../Elements/FormInput';
import Button from '../Elements/Button';
import useAuth from '../Hooks/useAuth';

export default function FormLogin() {
   const [showPassword, setShowPassword] = useState(false);
   const { auth } = useAuth();

   const handleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   const handleLogin = async (e) => {
      e.preventDefault();
      const userData = {
         username: e.target.username.value,
         password: e.target.password.value,
      };

      const res = await auth('login', userData);
      if (res.status === 200) {
         setTimeout(() => {
            window.location.reload();
         }, 2000);
         toast.success(res.data.message);
      } else {
         toast.error(res.response.data.message);
      }
   };

   return (
      <div className='min-h-screen max-w-md mx-auto flex justify-center items-center px-3 lg:px-0'>
         <div className='w-full px-2 pb-5 text-xs border rounded shadow-md'>
            <h1 className='font-briem font-black text-4xl text-center py-10'>Foods Est Java</h1>
            <form onSubmit={handleLogin}>
               <div className='flex flex-col gap-3 tracking-widest'>
                  <FormInput name={'username'} placeholder={'Masukan Username'} />

                  <div className='relative'>
                     <FormInput type={showPassword ? 'text' : 'password'} name={'password'} placeholder={'Masukan Kata Sandi'} />
                     <button type={'button'} onClick={handleShowPassword} className='absolute top-[4px] right-2'>
                        {showPassword ? <AiFillEye size={25} /> : <AiFillEyeInvisible size={25} />}
                     </button>
                  </div>

                  <Button
                     className='bg-gradient-to-r from-[#15bebe] to-[#a200a2] hover:from-[#a200a2] hover:to-[#15bebe] text-white mb-3'
                     value={'Login'}
                  />
               </div>
               <p className='text-center'>
                  Belum punya akun?{' '}
                  <Link to='/register' className='text-blue-500 font-bold hover:underline transition duration-300 ease-in-out'>
                     Registrasi
                  </Link>
               </p>
            </form>
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
