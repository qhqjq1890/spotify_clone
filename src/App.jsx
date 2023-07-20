import Login from "./components/Login";
import { useEffect } from "react";
import { reducerCases } from "./utils/Constant";
import { useStateProvider } from "./utils/StateProvider";
import Spotify from "./components/Spotify";

function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);
  return <>{token ? <Spotify /> : <Login />}</>;
}

export default App;
