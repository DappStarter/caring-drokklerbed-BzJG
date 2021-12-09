require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue olympic system index rate situate uniform hidden glimpse frame sheriff'; 
let testAccounts = [
"0x5f5f9e611c91dd59cae648f5fff8195715e422819dfe95a7f3d6272cac72288c",
"0xc1e00250071a0df420510e158b9fa868af3e24409239008351a94368a26bd0ac",
"0x3467987d48f771c199ef4010644ca90223a7fa3741896eb8bb838071eb2db5a2",
"0xaf9ffa22d3467d21c81709dd534fdcc27cc6cad832f2337e68b86126ea25edc2",
"0x049828fdf84d21ad3dfca304113ce18aa5f0d9aa23f31b343595fbad47ffe743",
"0x749e6ceeb57bd4f711ca4b964e37e229a17f2f160c651a6b8d108029f5742afd",
"0x8d7e23796b2e96a2725fc574b2d1aa0e066e17b9525628aeaf7ccf76c7901b8c",
"0xff6a88f58e5eabb71e09fd79d7273f7dc595b8d89635329efd75ec91b148fe8f",
"0xe2542cf42fffd863f66419d757ca7aef351b044fd9b9626b449b37dd41e57442",
"0x7f6be24aa0cfe0af557c780f9db2353a477250e4578172e0d36894ac79e7f2d1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


