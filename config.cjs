
const config = {
    blockNumber: 18871235, // enter snapshot number 
    endpoint: "wss://polkadot-rpc.dwellir.com/", // enter a working rpc endpoint 
    accountsFromPools: 'accountsFromPools.json', // enter the name of the file with the accounts from pools
    mainSnapshotFile: 'dot-balances-new-dwellir2.json', // enter the name of the file with the main snapshot
};

module.exports = config;