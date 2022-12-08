import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const injectedConnector = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 11155111],
});
const walletconnect = new WalletConnectConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 11155111],
  rpc: { 1: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`, 5: `https://goerli.infura.io/v3/e0171a3aab904c6bbe6622e6598770ad` },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,  
});

const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  appName: "Web3",
  supportedChainIds: [1, 3, 4, 5, 42, 11155111],
});


export const connectors = {
  injected: injectedConnector,
  walletConnect: walletconnect,
  coinbaseWallet: CoinbaseWallet,
};