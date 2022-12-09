import "../styles/main.scss";
import { useEffect, useCallback } from "react";
import blueRex from "../utils/blueRex";
import { StoreProvider } from "../context/context";
function App({ Component, pageProps }) {
  const setVisitor = useCallback(async () => {
    await blueRex.get("/api/visitors/?set=1");
  }, []);
  useEffect(() => {
    setVisitor();
  }, [setVisitor]);
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default App;
