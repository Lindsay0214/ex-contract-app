# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

### Source

- [npm web3modal](https://www.npmjs.com/package/web3modal)
- [npm ethers](https://www.npmjs.com/package/ethers) / [ethers docs](https://docs.ethers.io/v5/)
- [Ethers.js Cheat Sheet](https://dev.to/hideckies/ethers-js-cheat-sheet-1h5j)

### Install

```jsx
React CRA
npm i web3modal
npm i ethers
```

### Remix

- [ethers online IDE — remix](https://remix.ethereum.org/?#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.7+commit.e28d00a7.js)
- [Remixd: Access your Local Filesystem](https://remix-ide.readthedocs.io/en/latest/remixd.html)
- [Remixd Tutorial](https://medium.com/@jeffprestes/remixd-tutorial-809c96f5af36)

```jsx
npm install -g @remix-project/remixd

// snippet
remixd -s $(echo $PWD) --remix-ide https://remix.ethereum.org/
```

### hardhat

區塊鏈的一個框架，可以很快的編譯智能合約跟寫智能合約測試，也有很多好用 plugin
- [npm hardhat](https://www.npmjs.com/package/hardhat)
- [官網](https://hardhat.org/)

```jsx
npm i --save hardhat
```

### Progress

- progress now `zsh: command not found: remixd`
- Abi not yet
