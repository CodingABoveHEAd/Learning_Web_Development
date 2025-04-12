import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setdata] = useState(null);
  const [load, setload] = useState(false);
  const [error, seterror] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
        try {
            setload(true);
            seterror(false);
            const response = await fetch(url);
            const json = await response.json();
            setdata(json);
            setload(false);
          } catch (err) {

        setload(false);
        seterror(true);
      }
    };

    fetchdata();

  }, [url]);
  
  return{
   data,
   load,
   error
  };

}
