const main = async () => {
  const transactionFactory = await hre.ethers.getContractFactory('Transactions', )
  const transactionContract = await transactionFactory.deploy()

  await transactionContract.deployed()

  console.log('Transactions deployed to:', transactionContract.address) 
  // Returning the contract address on the rinkeby
}

;(async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})() // Calling the function to deploy the contract 
