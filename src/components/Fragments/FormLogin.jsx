import { Link } from 'react-router-dom';
import FormInput from '../Elements/FormInput';
import Button from '../Elements/Button';

export default function FormLogin() {
   return (
      <div className='min-h-screen max-w-md mx-auto flex justify-center items-center px-3 lg:px-0'>
         <div className='w-full px-2 pb-5 text-xs border rounded shadow-md'>
            <h1 className='font-briem font-black text-4xl text-center py-10'>Foods Est Java</h1>
            <div className='flex flex-col gap-2 tracking-widest'>
               <FormInput name={'username'} placeholder={'Masukan Username'} />
               <FormInput type={'password'} name={'password'} placeholder={'Masukan Password'} />
               <Button
                  className={'bg-gradient-to-r from-[#15bebe] to-[#a200a2] hover:from-[#a200a2] hover:to-[#15bebe] text-white'}
                  value={'Login'}
               />
               <p className='text-center'>
                  Belum punya akun?{' '}
                  <Link to='' className='text-blue-500 font-bold hover:underline transition duration-300 ease-in-out'>
                     Registrasi
                  </Link>
               </p>
            </div>
         </div>
      </div>
   );
}
