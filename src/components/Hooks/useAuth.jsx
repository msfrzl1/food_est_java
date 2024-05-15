import axios from 'axios';

export default function useAuth() {
   const auth = async (url, body) => {
      try {
         const res = await axios.post(`https://api.mudoapi.tech/${url}`, body);
         return res;
      } catch (error) {
         return error;
      }
   };

   return { auth };
}
