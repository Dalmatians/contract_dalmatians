import CollectionConfigInterface from "../lib/CollectionConfigInterface";
import * as Networks from "../lib/Networks";
import * as Marketplaces from "../lib/Marketplaces";
import whitelistAddresses from "./whitelist.json";

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
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
  contractAddress: "0xC73B38328872593bB3b8e1b11E5f8Efb5d54D38D",
  marketplaceIdentifier: "dalmatians-official",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
  royaltyReceiver: null,
  royaltyNumerator: null,
  boxbiesContract: "0x0ae568DfC0745387C504B240D8AdE5e74b9fD2bB",
};

export default CollectionConfig;
