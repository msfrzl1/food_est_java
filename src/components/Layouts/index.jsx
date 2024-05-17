import Navbar from '../Elements/Navbar';

export default function Layouts({ children }) {
   return (
      <>
         <Navbar />
         {children}
      </>
   );
}
