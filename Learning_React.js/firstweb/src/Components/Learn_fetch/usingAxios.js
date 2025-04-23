import axios from "axios";
import { useEffect, useState } from "react";

export default function Axios() {
  const [data, setdata] = useState(null);
  const [load, setload] = useState(false);
  const [error, seterror] = useState(false);

  useEffect(() => {
    const fetchdata = async() => {
      try {
        setload(true);
        seterror(false);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/6"
        );
        // console.log(typeof response);
        setdata(response.data);
        setload(false);
      } catch (err) {
        setload(false);
        seterror(true);
      }
    };

    fetchdata();
  }, []);
  if (load) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return data && (
    <div>
      <h2>{JSON.stringify(data)}</h2>
     
    </div>
  );
}
