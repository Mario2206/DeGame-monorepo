# DeGames App

## Getting Started 


1. Install the dependencies 
```
yarn install 
cd ./app 
yarn install
```

2. Compile smart contracts
```
yarn compile
```

3. Start the local hardhat network
```
yarn start-node
```

4. Deploy your contracts on local network
```
yarn deploy
```

5. Start the front-end app
```
cd ./app 
yarn dev
```

## How to connect your wallet to the local network?

### With metamask

Go to `Add Network` > `Add network manually` and input the following form:

![metamask add network](./images/metamask-network.png)

You can have more info [here](https://docs.metamask.io/wallet/how-to/get-started-building/run-devnet/).

## How to deploy the smart contracts to Sepolia network? 

```
yarn deploy:sepolia
```

## Smart contract deployed

### Sepolia 

Game contract deployed to `0x2514Ac1cd8D974Ceb4d265E2E2CdE47Ed7354203`
BadgeManager contract deployed to `0x9e7A1785d3E0afa709EFAbE44F555c28D5605361`
GameComments contract deployed to `0xA98C400BfC3052490440a2751868a45c007Eeaff`

