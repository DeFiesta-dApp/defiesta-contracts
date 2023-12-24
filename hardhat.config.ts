import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-toolbox-viem';
import '@nomicfoundation/hardhat-ethers';
import '@nomicfoundation/hardhat-toolbox/network-helpers';
import 'solidity-coverage';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.19',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {},
};

export default config;
