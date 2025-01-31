import axios from 'axios';

export default function useDelete() {
   const deleteData = async (url) => {
      try {
         const res = await axios.delete(`https://api.mudoapi.tech/${url}`, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
         });
         return res;
      } catch (error) {
         return error;
      }
   };
   return { deleteData };
}
