(function(){var e={4277:function(e,t,n){"use strict";var a=n(9242),i=n(3396);function s(e,t,n,a,s,r){const o=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(o)}var r=n(7327),o=n(6520),l=n(2578),u=n(6750),p=n(7365),d=n(8473),y=n(3922),c=n(3297),m=n(672);const b={chainId:80001,symbol:"MATIC (test)",blockExplorer:{name:"Polygonscan (Mumbai)",generateContractUrl:e=>`https://mumbai.polygonscan.com/address/${e}`,generateTransactionUrl:e=>`https://mumbai.polygonscan.com/tx/${e}`}},f={chainId:137,symbol:"MATIC",blockExplorer:{name:"Polygonscan",generateContractUrl:e=>`https://polygonscan.com/address/${e}`,generateTransactionUrl:e=>`https://polygonscan.com/tx/${e}`}};var h=n(8329),w=JSON.parse('["0xC5EBdd487fF97ce2698b69cc09EF0BEfdE476944","0x9542e847696df79129aC4e72f588496cF6268d49","0x807fE6EBA180B07b5E55a7D0557e816d2c47CEf4","0x35aEA08d48345EcDAb476C7a55f0079F3D32381d"]');const T={testnet:b,mainnet:f,contractName:"Dalmatians",tokenName:"Dalmatians",tokenSymbol:"DLMTS",hiddenMetadataUri:"ipfs://QmbLU3Hy8YtMyEgQLhZ2t4odQqf5f2TCf2dUUApAFuUKnM/0.json",maxSupply:5e3,whitelistSale:{price:0,maxMintAmountPerTx:5},preSale:{price:0,maxMintAmountPerTx:5},publicSale:{price:0,maxMintAmountPerTx:5},contractAddress:null,marketplaceIdentifier:"dalmatians-official",marketplaceConfig:h.u,whitelistAddresses:w,royaltyReceiver:null,royaltyNumerator:null,boxbiesContract:"0x0ae568DfC0745387C504B240D8AdE5e74b9fD2bB"};var g=T,v=n(9282),k=n(3374),M=n.n(k);class _{constructor(){(0,r.Z)(this,"merkleTree",void 0)}getMerkleTree(){if(void 0===this.merkleTree){const e=w.map((e=>M()(e)));this.merkleTree=new v.MerkleTree(e,M(),{sortPairs:!0})}return this.merkleTree}getProofForAddress(e){return this.getMerkleTree().getHexProof(M()(e))}getRawProofForAddress(e){return this.getProofForAddress(e).toString().replaceAll("'","").replaceAll(" ","")}contains(e){return this.getMerkleTree().getLeafIndex(Buffer.from(M()(e)))>=0}}var x=new _;const C=[{stateMutability:"nonpayable",type:"constructor",inputs:[{name:"_tokenName",internalType:"string",type:"string"},{name:"_tokenSymbol",internalType:"string",type:"string"},{name:"_cost",internalType:"uint256",type:"uint256"},{name:"_maxSupply",internalType:"uint256",type:"uint256"},{name:"_maxMintAmountPerTx",internalType:"uint256",type:"uint256"},{name:"_hiddenMetadataUri",internalType:"string",type:"string"},{name:"_royaltyReceiver",internalType:"address",type:"address"},{name:"_royaltyNumerator",internalType:"uint96",type:"uint96"},{name:"_boxbiesContract",internalType:"address",type:"address"}]},{type:"error",inputs:[],name:"ApprovalCallerNotOwnerNorApproved"},{type:"error",inputs:[],name:"ApprovalQueryForNonexistentToken"},{type:"error",inputs:[],name:"BalanceQueryForZeroAddress"},{type:"error",inputs:[],name:"MintERC2309QuantityExceedsLimit"},{type:"error",inputs:[],name:"MintToZeroAddress"},{type:"error",inputs:[],name:"MintZeroQuantity"},{type:"error",inputs:[{name:"operator",internalType:"address",type:"address"}],name:"OperatorNotAllowed"},{type:"error",inputs:[],name:"OwnerQueryForNonexistentToken"},{type:"error",inputs:[],name:"OwnershipNotInitializedForExtraData"},{type:"error",inputs:[],name:"TransferCallerNotOwnerNorApproved"},{type:"error",inputs:[],name:"TransferFromIncorrectOwner"},{type:"error",inputs:[],name:"TransferToNonERC721ReceiverImplementer"},{type:"error",inputs:[],name:"TransferToZeroAddress"},{type:"error",inputs:[],name:"URIQueryForNonexistentToken"},{type:"event",anonymous:!1,inputs:[{name:"owner",internalType:"address",type:"address",indexed:!0},{name:"approved",internalType:"address",type:"address",indexed:!0},{name:"tokenId",internalType:"uint256",type:"uint256",indexed:!0}],name:"Approval"},{type:"event",anonymous:!1,inputs:[{name:"owner",internalType:"address",type:"address",indexed:!0},{name:"operator",internalType:"address",type:"address",indexed:!0},{name:"approved",internalType:"bool",type:"bool",indexed:!1}],name:"ApprovalForAll"},{type:"event",anonymous:!1,inputs:[{name:"fromTokenId",internalType:"uint256",type:"uint256",indexed:!0},{name:"toTokenId",internalType:"uint256",type:"uint256",indexed:!1},{name:"from",internalType:"address",type:"address",indexed:!0},{name:"to",internalType:"address",type:"address",indexed:!0}],name:"ConsecutiveTransfer"},{type:"event",anonymous:!1,inputs:[{name:"previousOwner",internalType:"address",type:"address",indexed:!0},{name:"newOwner",internalType:"address",type:"address",indexed:!0}],name:"OwnershipTransferred"},{type:"event",anonymous:!1,inputs:[{name:"from",internalType:"address",type:"address",indexed:!0},{name:"to",internalType:"address",type:"address",indexed:!0},{name:"tokenId",internalType:"uint256",type:"uint256",indexed:!0}],name:"Transfer"},{stateMutability:"view",type:"function",inputs:[],name:"OPERATOR_FILTER_REGISTRY",outputs:[{name:"",internalType:"contract IOperatorFilterRegistry",type:"address"}]},{stateMutability:"nonpayable",type:"function",inputs:[],name:"airdrop",outputs:[]},{stateMutability:"view",type:"function",inputs:[{name:"",internalType:"uint256",type:"uint256"}],name:"airdropList",outputs:[{name:"",internalType:"address",type:"address"}]},{stateMutability:"payable",type:"function",inputs:[{name:"operator",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"approve",outputs:[]},{stateMutability:"view",type:"function",inputs:[{name:"",internalType:"address",type:"address"}],name:"availableMints",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[{name:"owner",internalType:"address",type:"address"}],name:"balanceOf",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[],name:"boxbiesContract",outputs:[{name:"",internalType:"contract IBoxbies",type:"address"}]},{stateMutability:"view",type:"function",inputs:[],name:"cost",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"getApproved",outputs:[{name:"",internalType:"address",type:"address"}]},{stateMutability:"view",type:"function",inputs:[],name:"hiddenMetadataUri",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[{name:"owner",internalType:"address",type:"address"},{name:"operator",internalType:"address",type:"address"}],name:"isApprovedForAll",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_tokenIds",internalType:"uint256[]",type:"uint256[]"}],name:"markUsedNFTs",outputs:[]},{stateMutability:"view",type:"function",inputs:[],name:"maxMintAmountPerTx",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[],name:"maxSupply",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[],name:"merkleRoot",outputs:[{name:"",internalType:"bytes32",type:"bytes32"}]},{stateMutability:"view",type:"function",inputs:[],name:"merkleTreeEnabled",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"payable",type:"function",inputs:[{name:"_mintAmount",internalType:"uint256",type:"uint256"}],name:"mint",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_mintAmount",internalType:"uint256",type:"uint256"},{name:"_receiver",internalType:"address",type:"address"}],name:"mintForAddress",outputs:[]},{stateMutability:"view",type:"function",inputs:[],name:"name",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[],name:"owner",outputs:[{name:"",internalType:"address",type:"address"}]},{stateMutability:"view",type:"function",inputs:[{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"ownerOf",outputs:[{name:"",internalType:"address",type:"address"}]},{stateMutability:"view",type:"function",inputs:[],name:"paused",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"nonpayable",type:"function",inputs:[],name:"renounceOwnership",outputs:[]},{stateMutability:"view",type:"function",inputs:[],name:"revealed",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"view",type:"function",inputs:[{name:"tokenId",internalType:"uint256",type:"uint256"},{name:"salePrice",internalType:"uint256",type:"uint256"}],name:"royaltyInfo",outputs:[{name:"",internalType:"address",type:"address"},{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"payable",type:"function",inputs:[{name:"from",internalType:"address",type:"address"},{name:"to",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"safeTransferFrom",outputs:[]},{stateMutability:"payable",type:"function",inputs:[{name:"from",internalType:"address",type:"address"},{name:"to",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"},{name:"data",internalType:"bytes",type:"bytes"}],name:"safeTransferFrom",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_airdropList",internalType:"address[]",type:"address[]"}],name:"setAirdropList",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"operator",internalType:"address",type:"address"},{name:"approved",internalType:"bool",type:"bool"}],name:"setApprovalForAll",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_cost",internalType:"uint256",type:"uint256"}],name:"setCost",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"receiver",internalType:"address",type:"address"},{name:"feeNumerator",internalType:"uint96",type:"uint96"}],name:"setDefaultRoyalty",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_hiddenMetadataUri",internalType:"string",type:"string"}],name:"setHiddenMetadataUri",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_maxMintAmountPerTx",internalType:"uint256",type:"uint256"}],name:"setMaxMintAmountPerTx",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_merkleRoot",internalType:"bytes32",type:"bytes32"}],name:"setMerkleRoot",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_state",internalType:"bool",type:"bool"}],name:"setMerkleTreeStatus",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_state",internalType:"bool",type:"bool"}],name:"setPaused",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_state",internalType:"bool",type:"bool"}],name:"setRevealed",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_uriPrefix",internalType:"string",type:"string"}],name:"setUriPrefix",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_uriSuffix",internalType:"string",type:"string"}],name:"setUriSuffix",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"firstWhitelist",internalType:"bool",type:"bool"},{name:"addresses",internalType:"address[]",type:"address[]"}],name:"setWhitelist",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_state",internalType:"bool",type:"bool"}],name:"setWhitelistMintEnabled",outputs:[]},{stateMutability:"view",type:"function",inputs:[{name:"interfaceId",internalType:"bytes4",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"view",type:"function",inputs:[],name:"symbol",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[{name:"_tokenId",internalType:"uint256",type:"uint256"}],name:"tokenURI",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[],name:"totalSupply",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"payable",type:"function",inputs:[{name:"from",internalType:"address",type:"address"},{name:"to",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"transferFrom",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"newOwner",internalType:"address",type:"address"}],name:"transferOwnership",outputs:[]},{stateMutability:"view",type:"function",inputs:[],name:"uriPrefix",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[],name:"uriSuffix",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[{name:"",internalType:"uint256",type:"uint256"}],name:"usedBoxbiesNFTs",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"view",type:"function",inputs:[{name:"",internalType:"address",type:"address"}],name:"whitelist",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"view",type:"function",inputs:[{name:"",internalType:"address",type:"address"}],name:"whitelist2",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"view",type:"function",inputs:[{name:"",internalType:"address",type:"address"}],name:"whitelist2Claimed",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"payable",type:"function",inputs:[{name:"_mintAmount",internalType:"uint256",type:"uint256"}],name:"whitelistMint",outputs:[]},{stateMutability:"payable",type:"function",inputs:[{name:"_mintAmount",internalType:"uint256",type:"uint256"},{name:"_merkleProof",internalType:"bytes32[]",type:"bytes32[]"}],name:"whitelistMint2",outputs:[]},{stateMutability:"view",type:"function",inputs:[],name:"whitelistMint2Enabled",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"view",type:"function",inputs:[],name:"whitelistMintEnabled",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"nonpayable",type:"function",inputs:[],name:"withdraw",outputs:[]}],A=[{stateMutability:"view",type:"function",inputs:[{name:"_user",internalType:"address",type:"address"}],name:"isOGlisted",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"view",type:"function",inputs:[{name:"_user",internalType:"address",type:"address"}],name:"isWhitelisted",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"view",type:"function",inputs:[{name:"_owner",internalType:"address",type:"address"}],name:"tokensByOwner",outputs:[{name:"",internalType:"uint256[]",type:"uint256[]"}]}],U={contract:null,initDone:!1,userAddress:null,network:null,networkConfig:g.mainnet,totalSupply:0,maxSupply:0,maxMintAmountPerTx:0,tokenPrice:BigInt(0),isPaused:!0,loading:!1,isWhitelistMintEnabled:!1,isUserInWhitelist:!1,merkleProofManualAddressStatus:null,errorMessage:null,boxieContract:null,boxieOwned:0},S="0d83d4f2cf23d3ecafdec74d1e273513",{chains:W,publicClient:P,webSocketPublicClient:I}=(0,d.QB)([y.yu],[(0,c.I)()]),O=(0,d._g)({autoConnect:!0,connectors:(0,u.gu)({projectId:S,chains:W}),publicClient:P,webSocketPublicClient:I}),E=new u.J0(O,W),N=new p.E({projectId:S},E),D={address:g.contractAddress,abi:C},F=(0,l.Q_)("Web3",{state:()=>U,actions:{async init(){console.log("Web3 init start"),this.registerWalletEvents(),this.contract=(0,d.uN)({...D,walletClient:E}),this.boxieContract=(0,d.uN)({address:g.boxbiesContract,abi:A,chainId:y.yu.id});try{this.$patch({maxSupply:Number(await this.contract.read.maxSupply([])),totalSupply:Number(await this.contract.read.totalSupply([])),maxMintAmountPerTx:Number(await this.contract.read.maxMintAmountPerTx([])),tokenPrice:await this.contract.read.cost([]),isPaused:await this.contract.read.paused([]),isWhitelistMintEnabled:await this.contract.read.whitelistMintEnabled([]),isUserInWhitelist:x.contains(this.userAddress??"")})}catch(e){}this.initDone=!0},async registerWalletEvents(){E.watchAccount((async({isConnected:e,address:t})=>{e?(this.userAddress=t,this.boxieOwned=(await this.boxieContract.read.tokensByOwner([this.userAddress])).length):this.userAddress=null})),E.watchNetwork((({chain:e})=>{this.network=e?{name:e.name,chainId:e.id}:null}))},setError(e=null){let t="Unknown error...";null===e||"string"===typeof e?t=e:"object"===typeof e&&(e?.details?t=e.details:void 0!==e?.error?.message?t=e.error.message:void 0!==e?.data?.message?t=e.data.message:void 0!==e?.message&&(t=e.message)),this.errorMessage=null===t?null:t.charAt(0).toUpperCase()+t.slice(1)},async connectWallet(){await N.openModal()},copyMerkleProofToClipboard(e){const t=x.getRawProofForAddress(e);t.length<1?this.merkleProofManualAddressStatus=!1:(navigator.clipboard.writeText(t),this.merkleProofManualAddressStatus=!0)},async handleTransaction(e){const{hash:t}=await(0,d.n9)(e);m.Am.info(`\n        <p>Transaction sent! Please wait...</p>\n        <a href=${this.generateTransactionUrl(t)} target="_blank" rel="noopener">View on ${this.networkConfig.blockExplorer.name}</a>\n      `,{dangerouslyHTMLString:!0,position:"bottom-center"}),await(0,d.Mn)({hash:t}),m.Am.info(`\n        <p>Success!</p>\n        <a href=${this.generateTransactionUrl(t)} target="_blank" rel="noopener">View on ${this.networkConfig.blockExplorer.name}</a>\n      `,{dangerouslyHTMLString:!0,position:"bottom-center"})},async mintTokens(e){try{this.loading=!0;const t=this.tokenPrice*BigInt(e),{request:n}=await(0,d.$q)({...D,functionName:"mint",args:[BigInt(e)],value:t});await this.handleTransaction(n),this.loading=!1}catch(t){this.setError(t),this.loading=!1}},async whitelistMintTokens(e){try{this.loading=!0;const t=this.tokenPrice*BigInt(e),{request:n}=await(0,d.$q)({...D,functionName:"whitelistMint",args:[BigInt(e)],value:t});await this.handleTransaction(n),this.loading=!1}catch(t){this.setError(t),this.loading=!1}}},getters:{getUserAddress(){return this.userAddress},isWalletConnected(){return!!this.userAddress},isContractReady(){return void 0!==this.contract&&this.initDone},isSoldOut(){return 0!==this.maxSupply&&this.totalSupply>=this.maxSupply},isNotMainnet(){return null!==this.network&&this.network.chainId!==g.mainnet.chainId},generateContractUrl(){return this.networkConfig.blockExplorer.generateContractUrl(g.contractAddress)},generateMarketplaceUrl(){return g.marketplaceConfig.generateCollectionUrl(g.marketplaceIdentifier,!this.isNotMainnet)},generateTransactionUrl(e){return t=>e.networkConfig.blockExplorer.generateTransactionUrl(t)},marketPlaceName(){return g.marketplaceConfig.name}}});class B extends o.w3{constructor(...e){super(...e),(0,r.Z)(this,"Web3",F())}mounted(){this.Web3.init()}}var R=n(89);const j=(0,R.Z)(B,[["render",s]]);var L=j,z=n(2483),Z=n(4870),H=n(7139);const q={className:"collection-status"},Q={className:"user-address"},$=(0,i._)("span",{className:"label"},"Wallet address:",-1),Y={className:"address"},V={className:"supply"},G=(0,i._)("span",{className:"label"},"Supply",-1),J={className:"current-sale"},K=(0,i._)("span",{className:"label"},"Sale status",-1);function X(e,t,n,a,s,r){return(0,i.wg)(),(0,i.iD)("div",q,[(0,i._)("div",Q,[$,(0,i._)("span",Y,(0,H.zw)(e.Web3.userAddress),1)]),(0,i._)("div",V,[G,(0,i.Uk)(" "+(0,H.zw)(e.Web3.totalSupply)+"/"+(0,H.zw)(e.Web3.maxSupply),1)]),(0,i._)("div",J,[K,(0,i.Uk)(" "+(0,H.zw)(e.isSaleOpen?e.Web3.isWhitelistMintEnabled?"Whitelist only":"Open":"Closed"),1)])])}class ee extends o.w3{constructor(...e){super(...e),(0,r.Z)(this,"Web3",F())}get isSaleOpen(){return(this.Web3.isWhitelistMintEnabled||!this.Web3.isPaused)&&!this.Web3.isSoldOut}}const te=(0,R.Z)(ee,[["render",X]]);var ne=te;const ae={key:0,class:"mint-widget"},ie={className:"price"},se=(0,i._)("strong",null,"Total price:",-1),re={className:"controls"},oe={className:"mint-amount"},le=["disabled"],ue={key:1},pe={className:"cannot-mint"},de=(0,i._)("strong",null,"whitelist",-1),ye=(0,i._)("strong",null,"paused",-1),ce=(0,i._)("br",null,null,-1);function me(e,t,n,a,s,r){return(0,i.wg)(),(0,i.iD)("div",null,[e.canMint?((0,i.wg)(),(0,i.iD)("div",ae,[(0,i._)("div",ie,[se,(0,i.Uk)(" "+(0,H.zw)(e.formattedPrice)+" "+(0,H.zw)(e.Web3.networkConfig.symbol),1)]),(0,i._)("div",re,[(0,i._)("span",oe,(0,H.zw)(e.mintAmount),1),(0,i._)("button",{className:"primary",onClick:t[0]||(t[0]=(...t)=>e.mint&&e.mint(...t)),disabled:e.Web3.loading||0==e.mintAmount},"Mint",8,le)])])):((0,i.wg)(),(0,i.iD)("div",ue,[(0,i._)("div",pe,[e.Web3.isWhitelistMintEnabled?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)("You are not included in the "),de,(0,i.Uk)(".")],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)("The contract is "),ye,(0,i.Uk)(".")],64)),ce,(0,i.Uk)(" Please come back during the next sale! ")])]))])}var be=n(758);class fe extends o.w3{constructor(...e){super(...e),(0,r.Z)(this,"Web3",F())}get canMint(){return!this.Web3.isPaused||this.canWhitelistMint}get canWhitelistMint(){return this.Web3.isWhitelistMintEnabled&&this.Web3.isUserInWhitelist}get formattedPrice(){return be.dF(this.Web3.tokenPrice*BigInt(this.mintAmount)).toString()}get mintAmount(){return this.Web3.boxieOwned>=50?100:this.Web3.boxieOwned>=30?60:this.Web3.boxieOwned>=10?20:this.Web3.boxieOwned>=5?10:this.Web3.boxieOwned>=1?2:0}async mint(){this.Web3.isPaused?await this.Web3.whitelistMintTokens(this.mintAmount):await this.Web3.mintTokens(this.mintAmount)}}const he=(0,R.Z)(fe,[["render",me]]);var we=he;const Te=e=>((0,i.dD)("data-v-bdb3159e"),e=e(),(0,i.Cn)(),e),ge={key:0,class:"countDown"},ve={key:0,class:"text-animation"},ke={key:1},Me=Te((()=>(0,i._)("h2",{class:"cdTitle"},"OG Drop starts in:",-1))),_e={class:"timer"},xe=Te((()=>(0,i._)("p",null,[(0,i._)("small",null,"Days")],-1))),Ce=Te((()=>(0,i._)("span",null,":",-1))),Ae=Te((()=>(0,i._)("p",null,[(0,i._)("small",null,"Hrs")],-1))),Ue=Te((()=>(0,i._)("span",null,":",-1))),Se=Te((()=>(0,i._)("p",null,[(0,i._)("small",null,"Min")],-1))),We=Te((()=>(0,i._)("span",null,":",-1))),Pe=Te((()=>(0,i._)("p",null,[(0,i._)("small",null,"Sec")],-1)));function Ie(e,t,n,a,s,r){return s.displayCountDown?((0,i.wg)(),(0,i.iD)("div",ge,[s.isLive?((0,i.wg)(),(0,i.iD)("h2",ve,"OG Drop is now LIVE")):((0,i.wg)(),(0,i.iD)("div",ke,[Me,(0,i._)("section",null,[(0,i._)("section",_e,[(0,i._)("div",null,[(0,i._)("section",null,[(0,i._)("p",null,(0,H.zw)(s.days),1),xe]),Ce,(0,i._)("section",null,[(0,i._)("p",null,(0,H.zw)(s.hours),1),Ae]),Ue,(0,i._)("section",null,[(0,i._)("p",null,(0,H.zw)(s.minutes),1),Se]),We,(0,i._)("section",null,[(0,i._)("p",null,(0,H.zw)(s.seconds),1),Pe])])])])]))])):(0,i.kq)("",!0)}var Oe={name:"CountDownTimer",created(){this.startTimer()},data(){return{days:0,hours:0,minutes:0,seconds:0,isLive:!1,displayCountDown:!1}},methods:{startTimer(){const e=new Date("June 30, 2023 16:00:00").getTime(),t=setInterval((()=>{const n=new Date,a=new Date(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds()).getTime(),i=e-a,s=Math.floor(i/864e5),r=Math.floor(i%864e5/36e5),o=Math.floor(i%36e5/6e4),l=Math.floor(i%6e4/1e3);i<=0?(this.isLive=!0,clearInterval(t)):(this.days=s,this.hours=r,this.minutes=o,this.seconds=l),this.displayCountDown=!0}),1e3)}}};const Ee=(0,R.Z)(Oe,[["render",Ie],["__scopeId","data-v-bdb3159e"]]);var Ne=Ee;const De={id:"minting-dapp"},Fe=(0,i._)("div",{class:"links"},[(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("a",{href:"https://discord.gg/boxbies",target:"_blank"},"Discord")]),(0,i._)("li",null,[(0,i._)("a",{href:"https://twitter.com/dalmatiansnft",target:"_blank"},"twitter")]),(0,i._)("li",null,[(0,i._)("a",{href:"https://twitter.com/AtlanCoelho",target:"_blank"},"artist")])])],-1),Be={class:"mainCont"},Re={class:"container"},je={key:0,class:"alert alert-warning",role:"alert"},Le={class:"small"},ze={key:1,class:"alert alert-warning alert-dismissible fade show",role:"alert"},Ze={key:1},He=(0,i._)("h2",null,[(0,i.Uk)("Dalmatians have been "),(0,i._)("strong",null,"sold out"),(0,i.Uk)("! "),(0,i._)("span",{class:"emoji"},"🥳")],-1),qe=["href"],Qe={key:3,class:"collection-not-ready"},$e=(0,i._)("svg",{class:"spinner",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[(0,i._)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,i._)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),Ye={key:4,class:"no-wallet"},Ve=(0,i._)("div",null,[(0,i._)("div",{class:"partners"})],-1);var Ge=(0,i.aZ)({__name:"HomeView",setup(e){const t=F(),n=(0,Z.iH)("");return(0,i.YP)((()=>t.userAddress),(e=>{!n.value&&e&&(n.value=e?.toString())})),(e,n)=>((0,i.wg)(),(0,i.iD)("div",De,[Fe,(0,i._)("div",Be,[(0,i._)("div",Re,[(0,Z.SU)(t).isNotMainnet?((0,i.wg)(),(0,i.iD)("div",je,[(0,i.Uk)(" You are not connected to the main network. "),(0,i._)("span",Le,[(0,i.Uk)("Current network: "),(0,i._)("strong",null,(0,H.zw)((0,Z.SU)(t).network?.name),1)])])):(0,i.kq)("",!0),(0,Z.SU)(t).errorMessage?((0,i.wg)(),(0,i.iD)("div",ze,[(0,i.Uk)((0,H.zw)((0,Z.SU)(t).errorMessage)+" ",1),(0,i._)("button",{onClick:n[0]||(n[0]=e=>(0,Z.SU)(t).setError()),type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})])):(0,i.kq)("",!0),(0,Z.SU)(t).isWalletConnected&&(0,Z.SU)(t).isContractReady?((0,i.wg)(),(0,i.iD)(i.HY,{key:2},[(0,i.Wm)(ne),(0,Z.SU)(t).isSoldOut?((0,i.wg)(),(0,i.iD)("div",Ze,[He,(0,i.Uk)(" You can buy from our beloved holders on "),(0,i._)("a",{href:(0,Z.SU)(t).generateMarketplaceUrl,target:"_blank"},(0,H.zw)((0,Z.SU)(t).marketPlaceName),9,qe),(0,i.Uk)(". ")])):((0,i.wg)(),(0,i.j4)(we,{key:0}))],64)):(0,i.kq)("",!0),(0,Z.SU)(t).isContractReady?(0,Z.SU)(t).isWalletConnected?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",Ye,[(0,i.Wm)(Ne),(0,i._)("button",{class:"primary",onClick:n[1]||(n[1]=(...e)=>(0,Z.SU)(t).connectWallet&&(0,Z.SU)(t).connectWallet(...e))},"Connect Wallet")])):((0,i.wg)(),(0,i.iD)("div",Qe,[$e,(0,i.Uk)(" Loading collection data... ")]))]),Ve])]))}});const Je=Ge;var Ke=Je;const Xe=[{path:"/",name:"home",component:Ke}],et=(0,z.p7)({history:(0,z.r5)(),routes:Xe});var tt=et;const nt=(0,l.WB)();var at=nt,it=(n(2166),n(5361));window.Buffer=window.Buffer||it.Buffer,(0,a.ri)(L).use(tt).use(at).mount("#app")},8329:function(e,t){"use strict";t.u=void 0,t.u={name:"OpenSea",generateCollectionUrl:(e,t)=>"https://"+(t?"www":"testnets")+".opensea.io/collection/"+e}},6601:function(){},2361:function(){},4616:function(){}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var s=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,s){if(!a){var r=1/0;for(p=0;p<e.length;p++){a=e[p][0],i=e[p][1],s=e[p][2];for(var o=!0,l=0;l<a.length;l++)(!1&s||r>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(o=!1,s<r&&(r=s));if(o){e.splice(p--,1);var u=i();void 0!==u&&(t=u)}}return t}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[a,i,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{281:"bec5f823",335:"afcc76cf",649:"0f0109bb",776:"5c8b68a0",780:"b08d9cf2",916:"0e505608",943:"fc0d1c76"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-web3:";n.l=function(a,i,s,r){if(e[a])e[a].push(i);else{var o,l;if(void 0!==s)for(var u=document.getElementsByTagName("script"),p=0;p<u.length;p++){var d=u[p];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+s){o=d;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",t+s),o.src=a),e[a]=[i];var y=function(t,n){o.onerror=o.onload=null,clearTimeout(c);var i=e[a];if(delete e[a],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(e){return e(n)})),t)return t(n)},c=setTimeout(y.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=y.bind(null,o.onerror),o.onload=y.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,a){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var s=new Promise((function(n,a){i=e[t]=[n,a]}));a.push(i[2]=s);var r=n.p+n.u(t),o=new Error,l=function(a){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",o.name="ChunkLoadError",o.type=s,o.request=r,i[1](o)}};n.l(r,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,s,r=a[0],o=a[1],l=a[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(l)var p=l(n)}for(t&&t(a);u<r.length;u++)s=r[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(p)},a=self["webpackChunkvue_web3"]=self["webpackChunkvue_web3"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4277)}));a=n.O(a)})();
//# sourceMappingURL=app.6b407b65.js.map