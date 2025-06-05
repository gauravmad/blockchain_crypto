export const CONTRACT_ADDRESS = "0x8b5cF2Eae212dE0Ab8bf45c4376d33EeC416E44e";
export const CHAIN_ID = 1; // Ethereum Mainnet

export const SUPPORTED_CHAINS = [
  {
    id: 1,
    name: "Ethereum",
    network: "mainnet",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: {
      default: "https://eth-mainnet.g.alchemy.com/v2/your-api-key",
    },
    blockExplorers: {
      default: { name: "Etherscan", url: "https://etherscan.io" },
    },
    testnet: false,
  },
  {
    id: 5,
    name: "Goerli",
    network: "goerli",
    nativeCurrency: {
      name: "Goerli Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: {
      default: "https://eth-goerli.g.alchemy.com/v2/your-api-key",
    },
    blockExplorers: {
      default: { name: "Etherscan", url: "https://goerli.etherscan.io" },
    },
    testnet: true,
  },
];