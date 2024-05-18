import axios from 'axios';

export default function useDelete() {
   const deleteData = async (url) => {
      try {
         const res = await axios.delete(`https://api.mudoapi.tech/${url}`, {
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
   return { deleteData };
}
