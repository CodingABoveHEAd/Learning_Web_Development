import axios from "axios";

// const fetcher = async (...args) => {
//   const response = await fetch(...args);
//   const data = await response.json();
//   return data;
// };

const fetcher =async (...args)=>{
    const response=await axios.get(...args);
    return response.data;
}

export default fetcher;
