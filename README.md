
## Run-book
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

## Tx hash
Optimism tx hash: 0xe74f6c0ff193b224d8d8d1f9613d4af34e0f0c8de8e175984704bcdadfcb37f2
Base tx hash: 0x0fe292fc4cabd7f37badaf8500c3779a4fcae581e13554e468d3d4d6f54e00de


## portAddr
Op: 0x778E7d254B9c609d4542b2109EA86212C6eFe4E9
Base: 0x778E7d254B9c609d4542b2109EA86212C6eFe4E9




