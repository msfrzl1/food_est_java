import { Link } from 'react-router-dom';
import FormInput from '../Elements/FormInput';
import Button from '../Elements/Button';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export default function FormLogin() {
   const [showPassword, setShowPassword] = useState(false);

   const handleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   return (
      <div className='min-h-screen max-w-md mx-auto flex justify-center items-center px-3 lg:px-0'>
         <div className='w-full px-2 pb-5 text-xs border rounded shadow-md'>
            <h1 className='font-briem font-black text-4xl text-center py-10'>Foods Est Java</h1>
            <div className='flex flex-col gap-3 tracking-widest'>
               <FormInput name={'username'} placeholder={'Masukan Username'} />
               <div className='relative'>
                  <FormInput type={showPassword ? 'text' : 'password'} name={'password'} placeholder={'Masukan Kata Sandi'} />
                  <button onClick={handleShowPassword} className='absolute top-[4px] right-2'>
                     {showPassword ? <AiFillEye size={25} /> : <AiFillEyeInvisible size={25} />}
                  </button>
               </div>
               <Button className='bg-gradient-to-r from-[#15bebe] to-[#a200a2] hover:from-[#a200a2] hover:to-[#15bebe] text-white' value={'Login'} />
               <p className='text-center'>
                  Belum punya akun?{' '}
                  <Link to='/register' className='text-blue-500 font-bold hover:underline transition duration-300 ease-in-out'>
                     Registrasi
                  </Link>
               </p>
            </div>
         </div>
      </div>
   );
}
