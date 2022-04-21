const dotenv = require('dotenv');
const HDWalletProvider = require('@truffle/hdwallet-provider');

dotenv.config();
const { DEPLOYER_PRIVATE_KEY, INFURA_PROJECT_ID, ETHERSCAN_API, BSCSCANAPIKEY, SNOWTRACE } = process.env;

module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
    test: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [DEPLOYER_PRIVATE_KEY],
          providerOrUrl: `wss://ropsten.infura.io/ws/v3/${INFURA_PROJECT_ID}`,
        }),
      network_id: 3,
      gas: 45000000,
      gasPrice: 10000000000,
      networkCheckTimeout: 60 * 60 * 1000,
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [DEPLOYER_PRIVATE_KEY],
          providerOrUrl: `wss://rinkeby.infura.io/ws/v3/${INFURA_PROJECT_ID}`,
        }),
      network_id: 4,
      gas: 29900000,
      gasPrice: 10000000000,
      networkCheckTimeout: 60 * 60 * 1000,
    },
    bsctest: {
      provider: () => new HDWalletProvider({
        privateKeys: [DEPLOYER_PRIVATE_KEY],
        providerOrUrl: `https://data-seed-prebsc-1-s1.binance.org:8545`
      }),
      network_id: 97,
      confirmations: 5,
      networkCheckTimeout: 60 * 60 * 1000,
      skipDryRun: false
    },
    fuji: {
      provider: () => new HDWalletProvider({
        privateKeys: [DEPLOYER_PRIVATE_KEY],
        providerOrUrl: `https://api.avax-test.network/ext/bc/C/rpc`
      }),
      network_id: 43113,
      confirmations: 5,
      networkCheckTimeout: 60 * 60 * 1000,
      skipDryRun: true
    }
  },
  console: {
    require: [{ path: './console.js' }],
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: ETHERSCAN_API,
    bscscan: BSCSCANAPIKEY,
    snowtrace: SNOWTRACE,
  },
  compilers: {
    solc: {
      version: '0.6.10',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200, // Optimize for how many times you intend to run the code
        },
      },
    },
  },
  timeoutBlocks: 100000000000,
  //
  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
  // enabled: false,
  // host: "127.0.0.1",
  // adapter: {
  //   name: "sqlite",
  //   settings: {
  //     directory: ".db"
  //   }
  // }
  // }
};
