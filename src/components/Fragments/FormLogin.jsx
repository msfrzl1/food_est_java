import { Link } from 'react-router-dom';

export default function FormLogin() {
   return (
      <div className='min-h-screen max-w-md mx-auto flex justify-center items-center px-3 lg:px-0'>
         <div className='w-full px-2 pb-5 text-xs border rounded shadow-md'>
            <h1 className='font-briem font-black text-4xl text-center py-10'>Foods East Java</h1>
            <div className='flex flex-col gap-2 tracking-widest'>
               <div className='flex flex-col border rounded-[0.2rem] overflow-hidden'>
                  <input type='text' name='username' placeholder='Masukan Username' className='px-2 py-2 focus:bg-gray-50 outline-none' />
               </div>
               <div className='flex flex-col mb-1 border rounded-[0.2rem] overflow-hidden'>
                  <input type='password' name='password' placeholder='Masukan Password' className='px-2 py-2 focus:bg-gray-50 outline-none' />
               </div>
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
