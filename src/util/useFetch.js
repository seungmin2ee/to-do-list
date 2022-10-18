import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [isRendering, setIsRendering] = useState(false);

  const reRendering = () => {
    setIsRendering(!isRendering)
  };

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
  },[isRendering]);

  return [data, isPending, reRendering]
};

export default useFetch;
