import './App.css';
import React, { useState, useEffect } from 'react'
import { ethers } from "ethers";
import Web3Modal from "web3modal";

const providerOptions = {
  /* See Provider Options Section */
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

function App() {
  const [address, setAdress] = useState('');
  const [balance, setBalance] = useState('');

  async function init() {
    const instance = await web3Modal.connect();
    // instance 暫時變數，初始化我們的 Web3Provider，Provider 類似 client 概念，透過這個做跟區塊鏈的互動

    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner(); // getSigner 拿到簽章
    console.log('signer', signer.getAddress());
    const addr = await signer.getAddress()
    console.log('addr', addr);
    setAdress(addr);

    const bal = await provider.getBalance(addr); // 拿到餘額的 BigNumber
    // 一個 ethers 是 10 的 18 次方 way，way????
    console.log('餘額轉換', ethers.utils.formatEther(bal));
    setBalance(ethers.utils.formatEther(bal))
  }

  useEffect(() => {
    init();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>地址：{address}, 你有 {balance} 的以太幣</p>
        <button>
          Connect Wallet
        </button>
      </header>
    </div>
  );
}

export default App;

// ------------------------------------------------------------------------------------
// metamask is a chrome extension, means it's a javascript file insert into the browser,   
// so we can use 「 window.ethereum 」 to get some data
// ------------------------------------------------------------------------------------
// use plugin web3 model -> npm i web3modal