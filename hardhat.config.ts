import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const { API_URL, PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  paths: { tests: "tests" },
  networks: {
    // goerli: {
    //   accounts: [PRIVATE_KEY ? PRIVATE_KEY : ""], //deployer
    //   url: API_URL,
    //   blockGasLimit: 100000000000000,
    // },
    hardhat: { hardfork: "merge" },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
  },
};

export default config;
