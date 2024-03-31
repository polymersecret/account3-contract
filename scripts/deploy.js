// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const { getUcHandlerAddress } = require('./private/_vibc-helpers.js');

async function main() {

  // NOTE: when adding additional args to the constructor, add them to the array as well
  const myContract = await hre.ethers.deployContract('BridgeSDK', [getUcHandlerAddress(hre.network.name)]);

  await myContract.waitForDeployment();

  // NOTE: Do not change the output string, its output is formatted to be used in the deploy-config.js script
  // to update the config.json file
  console.log(
    `Contract BridgeSDK deployed to ${myContract.target} on network ${hre.network.name}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});