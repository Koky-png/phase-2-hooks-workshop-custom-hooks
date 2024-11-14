function useWindowSize() {
  // keep track of the window size in state
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // add an event listener in the useEffect hook
  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // when the window resizes, update state
    window.addEventListener("resize", handleResize);

    return function cleanup() {
      // clean up the event listener when we are no longer using the hook
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}