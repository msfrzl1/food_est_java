export default function Button({ className, type = 'submit', children, value, ...props }) {
   return (
      <button {...props} type={type} className={`${className} font-bold py-2 w-full rounded-xl mb-1 transition duration-300 ease-in-out`}>
         {children || value}
      </button>
   );
}
