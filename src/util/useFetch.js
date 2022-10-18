import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        setIsPending(false);
        setData(data);
    })
    .catch(err => {
        setIsPending(false);
        console.log(err.message);
    })
  },[url]);

  return [data, isPending]
};

export default useFetch;
