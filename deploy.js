const { ethers } = require("hardhat");
// npx hardhat run --network localhost scripts/deployTest.js
async function main() {

    const [deployer] = await ethers.getSigners();

    console.log("Deployer Account: " + deployer.address);
    console.log(" Account balance: ", (await deployer.getBalance()).toString());
    
    // ===============================
    // Deploy Test
    // ===============================
    const Test = await ethers.getContractFactory('Test');
    console.log('Deploying Test...');
    const test = await Test.deploy();
    await test.deployed();
    console.log('Test deployed to:', test.address);}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
})