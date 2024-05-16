import axios from 'axios';

export default function useGet() {
   const getData = async (url) => {
      try {
         const res = await axios.get(`https://api.mudoapi.tech/${url}`);
         return res;
      } catch (error) {
         return error;
      }
   };

   return { getData };
}
