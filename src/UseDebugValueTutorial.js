import {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  useDebugValue,
} from "react";

const UseDebugValueTutorial = () => {
  function useApi(id) {
    const [info, setInfo] = useState(null);

    useDebugValue(info !== null ? "info" : "loading");

    useEffect(() => {
      (async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const data = await response.json();
        setInfo(data);
      })();
    }, []);

    return info;
  }
  // const [, forceUpdate] = useState(0);
  const info = useApi(1);

  return <div>{info && <h1>{JSON.stringify(info)}</h1>}</div>;
};

export default UseDebugValueTutorial;
