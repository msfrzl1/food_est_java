import axios from 'axios';

export default function usePost() {
   const postData = async (url, body) => {
      try {
         const res = await axios.post(`https://api.mudoapi.tech/${url}`, body, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
         });

         return res;
      } catch (error) {
         return error;
      }
   };

   return { postData };
}
