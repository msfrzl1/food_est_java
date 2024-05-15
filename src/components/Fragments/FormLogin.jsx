import { Link } from 'react-router-dom';
import FormInput from '../Elements/FormInput';

export default function FormLogin() {
   return (
      <div className='min-h-screen max-w-md mx-auto flex justify-center items-center px-3 lg:px-0'>
         <div className='w-full px-2 pb-5 text-xs border rounded shadow-md'>
            <h1 className='font-briem font-black text-4xl text-center py-10'>Foods East Java</h1>
            <div className='flex flex-col gap-2 tracking-widest'>
               <FormInput name='username' placeholder='Masukan Username' />
               <FormInput type='password' name='password' placeholder='Masukan Password' />
               <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-xl mb-1 transition duration-300 ease-in-out'>
                  Masuk
               </button>
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
