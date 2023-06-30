import CollectionConfigInterface from "../lib/CollectionConfigInterface";
import * as Networks from "../lib/Networks";
import * as Marketplaces from "../lib/Marketplaces";
import whitelistAddresses from "./whitelist.json";

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.hardhatLocal,
  mainnet: Networks.hardhatLocal,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: "Dalmatians",
  tokenName: "Dalmatians",
  tokenSymbol: "DLMTS",
  hiddenMetadataUri: "ipfs://QmbLU3Hy8YtMyEgQLhZ2t4odQqf5f2TCf2dUUApAFuUKnM/0.json",
  maxSupply: 5000,
  whitelistSale: {
    price: 0.0,
    maxMintAmountPerTx: 5,
  },
  preSale: {
    price: 0.0,
    maxMintAmountPerTx: 5,
  },
  publicSale: {
    price: 0.0,
    maxMintAmountPerTx: 5,
  },
  contractAddress: null,
  marketplaceIdentifier: "dalmatians-official",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
