
## Team Members

- @Ronald94554 - Developer


## Introduction

Our project aims to build a native token bridge between L2s. Currently our bridge will focus on Eth, with scalability to other ERC tokens. We will using token mapping and token mint/lock mechanisms


## Steps to reproduce
1. Contract dependens install, compile and deploy
```
just install
npx hardhat compile
just deploy optimism base
```
2. Copy the result of contract deployed(port address) or go to /config/config.json copy sendUniversalPacket.optimism.portAddr and sendUniversalPacket.base.portAddr
3. Go to /ibc-token-bridge/src/constant.js replace `opBridge` and `baseBridge` with port address from step 2
4. Go to /artifacts/contracts/BridgeSDK.sol/BridgeSDK.json file to copy ABI
5. Go to /ibc-token-bridge/src/constant.js replace `bridgeAbi` with ABI from setp 4
6. clone frontend project
```
npm i
npm run serve
```

## Proof of testnet interaction

After following the steps above you should have interacted with the testnet. You can check this at the [IBC Explorer](https://explorer.ethdenver.testnet.polymer.zone/).

Here's the data of our application:

- Contract (OP Sepolia) : 0x778E7d254B9c609d4542b2109EA86212C6eFe4E9
- Contract (Base Sepolia): 0x778E7d254B9c609d4542b2109EA86212C6eFe4E9
- Channel (OP Sepolia): 0x778E7d254B9c609d4542b2109EA86212C6eFe4E9
- Channel (Base Sepolia): 0x778E7d254B9c609d4542b2109EA86212C6eFe4E9

- Proof of Testnet interaction:
    - [SendTx](https://optimism-sepolia.blockscout.com/tx/0xe74f6c0ff193b224d8d8d1f9613d4af34e0f0c8de8e175984704bcdadfcb37f2)
    - [RecvTx](https://base-sepolia.blockscout.com/tx/0x0fe292fc4cabd7f37badaf8500c3779a4fcae581e13554e468d3d4d6f54e00de)
    - [Ack](https://base-sepolia.blockscout.com/tx/0x0fe292fc4cabd7f37badaf8500c3779a4fcae581e13554e468d3d4d6f54e00de)

## What we learned

It is very good to use polymer to build bridges

## Future Improvements
Establish channels for more erc tokens
Perhaps the efficiency of transfer can be optimized


## License
Apache 2.0