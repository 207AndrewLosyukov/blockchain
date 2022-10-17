async function main() {
    
    const [deployer] = await ethers.getSigners();

    console.log("Account value:", deployer.address);
    console.log("Balance of account:", (await deployer.getBalance()).toString());

    const Token = await ethers.getContractFactory("Domahska2");
    const token = await Token.deploy();

    console.log("Address of contract:", token.address);
  }

  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      
      process.exit(1);
    });