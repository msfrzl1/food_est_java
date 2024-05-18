import axios from 'axios';

export default function usePost() {
   const postData = async (url, body) => {
      try {
         const res = await axios.post(`https://api.mudoapi.tech/${url}`, body, {
            headers: {
               Authorization:
                  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VybmFtZSI6InJpZGhvIiwidXNlcklkIjoxLCJicmFuY2hJZCI6MCwiZW1haWwiOiIiLCJyb2xlTmFtZSI6ImFkbWluIn0sImlzcyI6Im11ZG8tYXBwIn0.zpjyvvq-NpRrtmVBxiC1w1VMTx4yHbJEyoGQu0cIzk4',
            },
         });

         return res;
      } catch (error) {
         return error;
      }
   };

   return { postData };
}
