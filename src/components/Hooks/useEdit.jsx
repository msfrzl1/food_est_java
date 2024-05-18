import axios from 'axios';

export default function useEdit() {
   const editData = async (url, body) => {
      try {
         const res = await axios.put(`https://api.mudoapi.tech/${url}`, body, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
         });
         return res;
      } catch (error) {
         return error;
      }
   };

   return { editData };
}
