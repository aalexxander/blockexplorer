import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";

import "./App.css";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState(0);
  const [hash, setHash] = useState("");
  const [count, setCount] = useState(0);

  useEffect(async () => {
    const block = await alchemy.core.getBlockWithTransactions("latest");
    console.log(block);
    setBlockNumber(block.number);
    setHash(block.hash);
    setCount(block.transactions.length);
  });

  return (
    <div className="App">
      <div>Block number: {blockNumber}</div>
      <div>Hash: {hash}</div>
      <div>Transactions: {count}</div>
    </div>
  );
}

export default App;
