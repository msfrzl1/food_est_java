import { useState } from 'react';
import FormInput from '../Elements/FormInput';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Button from '../Elements/Button';
import { Link } from 'react-router-dom';

export default function FormRegister() {
   const [showPassword, setShowPassword] = useState(false);

   const handleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   return (
      <div className='min-h-screen max-w-md mx-auto flex justify-center items-center px-3 lg:px-0'>
         <div className='w-full px-2 pb-5 text-xs border rounded shadow-md'>
            <div className='py-10 text-center'>
               <h1 className='font-briem font-black text-4xl'>Foods Est Java</h1>
               <p className='font-medium mt-2 text-slate-500'>Buat akun untuk melihat menu Foods Est Java.</p>
            </div>
            <div className='flex flex-col gap-3 tracking-widest'>
               <FormInput name={'name'} placeholder={'Masukan Nama Lengkap'} />
               <FormInput name={'username'} placeholder={'Masukan Username'} />
               <div className='relative'>
                  <FormInput type={showPassword ? 'text' : 'password'} name={'password'} placeholder={'Masukan Kata Sandi'} />
                  <button onClick={handleShowPassword} className='absolute top-[4px] right-2'>
                     {showPassword ? <AiFillEye size={25} /> : <AiFillEyeInvisible size={25} />}
                  </button>
               </div>
               <FormInput type={'number'} name={'roleId'} placeholder={'Masukan ID Role'} />
               <Button className='bg-gradient-to-r from-[#15bebe] to-[#a200a2] hover:from-[#a200a2] hover:to-[#15bebe] text-white' value={'Daftar'} />
               <p className='text-center'>
                  Sudah punya akun?{' '}
                  <Link to='/login' className='text-blue-500 font-bold hover:underline transition duration-300 ease-in-out'>
                     Login
                  </Link>
               </p>
            </div>
         </div>
      </div>
   );
}
