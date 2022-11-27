import "../styles/main.scss";
import { useEffect, useCallback } from "react";
import blueRex from "../utils/blueRex";
function App({ Component, pageProps }) {
  let i = 0;
  const setVisitor = useCallback(async () => {
    if (i === 0) {
      await blueRex.get("/api/visitors/?set=1");
    } else i++;
  }, [i]);
  useEffect(() => {
    setVisitor();
  }, [setVisitor]);
  return <Component {...pageProps} />;
}

export default App;
