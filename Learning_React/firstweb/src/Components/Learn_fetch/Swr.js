import { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "./fetcher";

export default function Swr() {
  const { data,error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts/1",
    fetcher,{
        suspense:'true',
    }
  );

  if(error)return <h1>There was an eror</h1>

//   console.log(useSWR(
//     "https://jsonplaceholder.typicode.com/posts/6",
//     fetcher
//   ));

  console.log(data );
  return (
    data && (
      <div>
        <h2>{JSON.stringify(data)}</h2>
      </div>
    )
  );
}
