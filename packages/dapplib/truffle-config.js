require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note maze pumpkin harvest drink forget gesture'; 
let testAccounts = [
"0x2cf20432101f263250c85a3bb4234a186dd5a7c9a73271ea75e1e8dea59e7e96",
"0xb90921e32f983240f49701a53afbd407573580f165b1144e3074eadbdf19615e",
"0x8a1d13bbc07baa9e2562999ee0bbd6191f042a5dee0a2892ab811f1e6839356e",
"0x50fe0dc3051f9f5900508314b1ba466d514f1fc82124360ceb2e1147a4b86ce3",
"0xcd52f1006604b602eb129b9732463af2d09ca17d0bc80c66e3f29b7141f5f58d",
"0xd6c00888bf627b91fc52ed490ad11f62beb5e090c3ff6c702b94595bde9836f8",
"0xbf760fc30bd0532eca0bc108101a038b91f2649dd8f20112afa46800a2d03d2a",
"0xe7198714ed96edb8d0cdcfb305f27eb39c8dcbbdcca4f452de56aa3a04328831",
"0x8781453afa0d262b3564fb3d72fa459d21e014deae0f89ccb18010b25d30cb74",
"0xb84728167d2a32c42ce1afe4582bc74ac9a7177e9c0e39b2420529f47f1432d7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
