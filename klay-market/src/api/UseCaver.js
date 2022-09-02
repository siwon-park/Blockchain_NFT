import Caver from 'caver-js';
import CounterABI from '../abi/CounterABI.json';
import KIP17TokenABI from '../abi/KIP17TokenABI.json';
import MarketABI from '../abi/MarketABI.json';
import { COUNT_CONTRACT_ADDRESS, NFT_CONTRACT_ADDRESS, ACCESS_KEY_ID, SECRET_KEY, CHAIN_ID } from '../constants';
// 1. smart contract 배포 주소 파악(fetch)
// 2. caver-js 이용해서 smart contract 연동하기
// 3. 가져온 smart contract 실행 결과(데이터)를 웹에 표현하기
const option = {
  headers: [
    {
      name: "Authorization",
      value: "Basic " + Buffer.from(ACCESS_KEY_ID + ":" + SECRET_KEY).toString("base64")
    },
    { name: "x-chain-id", value: CHAIN_ID }
  ]
}

const caver = new Caver(new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", option));
// const CountContract = new caver.contract(CounterABI, COUNT_CONTRACT_ADDRESS); // const CountContract = new caver.contract(JSON.parse(COUNT_ABI), COUNT_CONTRACT_ADDRESS)
const NFTContract = new caver.contract(KIP17TokenABI, NFT_CONTRACT_ADDRESS);

export const fetchCardsOf = async (address) => {
  // FetchBalance
  const balance = await NFTContract.methods.balanceOf(address).call()
  console.log(balance)
  // FetchTokenId
  const tokenIds = [];
  for (let i=0; i<balance; i++) {
    const id = await NFTContract.methods.tokenOfOwnerByIndex(address, i).call()
    tokenIds.push(id);
  }
  // FetchTokenURI
  const tokenURIs = [];
  for (let i = 0; i < balance; i++) {
    const uri = await NFTContract.methods.tokenURI(tokenIds[i]).call()
    tokenURIs.push(uri);
  }

  const nfts = [];
  for (let i=0; i<balance; i++) {
    nfts.push({uri: tokenURIs[i], id: tokenIds[i]});
  }
  console.log(nfts);
  return nfts;

}

// export const readCount = async () => {
//   const _count = await CountContract.methods.count().call() // count 함수를 call함
//   console.log(_count)
// }

// 
export const getBalance = (address) => {
  return caver.rpc.klay.getBalance(address).then((res) => {
    const balance = caver.utils.convertFromPeb(caver.utils.hexToNumberString(res))
    console.log(`balance: ${balance}`)
    return balance
  })
}

// export const setCount = async (newCount) => {
//   // 사용할 account 설정
//   try {
//     const privatekey = '0x9d043a40aee77b5e6943db90291a481bc6e1b4e7034c4c3c519c03c41b07b2c6';
//     const deployer = caver.wallet.keyring.createFromPrivateKey(privatekey);
//     caver.wallet.add(deployer);
//     // 스마트 컨트랙트 실행 트랜잭션 날리기
//     // 결과 확인
//     const receipt = await CountContract.methods.setCount(newCount).send({
//       from: deployer.address,
//       gas: '0x4bfd200'
//     })
//     console.log(receipt)
//   } catch (error) {
//     console.log(`[ERROR_SET_COUNT]${error}`);
//   }
// }