import "../styles/globals.css";
// import type { AppProps } from "next/app";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const supportedChainIds = [5];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp

