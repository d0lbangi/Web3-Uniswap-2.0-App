require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  network: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/ipvpLumtDKVgUmHvn20K2ZJIIlMOVIov',
      accounts: [
        'd74c879975bd2936f9fd1ce218ecf406dd8f4190720d73292e57910b8895da1c',
      ],
    },
  },
}
