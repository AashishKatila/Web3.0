require('@nomiclabs/hardhat-waffle');

module.exports ={
  solidity: '0.8.0',
  networks:{
    goerli: {
      url : "https://eth-goerli.g.alchemy.com/v2/eTUiVijFjrusVHPbbd9zIsJEdoGEBz1L",
      accounts: ["33ae91565c86e5c3e8893957f7a1b9a3d2440e394b29460ecc4213ba577af349"]
    }
  }
}