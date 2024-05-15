export default function FormInput({ type = 'text', ...props }) {
   return (
      <div className='flex flex-col border rounded-[0.2rem] overflow-hidden'>
         <input {...props} autoComplete='on' type={type} className='px-2 py-2 focus:bg-gray-50 outline-none' />
      </div>
   );
}
