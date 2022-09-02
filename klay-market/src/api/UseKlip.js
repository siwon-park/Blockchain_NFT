import axios from "axios";
import { COUNT_CONTRACT_ADDRESS, NFT_CONTRACT_ADDRESS, MARKET_CONTRACT_ADDRESS } from '../constants';

const A2P_API_PREPARE_URL = "https://a2a-api.klipwallet.com/v2/a2a/prepare";
const APP_NAME = 'KLAY_MARKET';

export const getAddress = (setQrValue, callback) => {
  
  axios.post(
    A2P_API_PREPARE_URL, {
      bapp: {
        name: APP_NAME
      },
      type: 'auth'
    } 
  ).then((response) => {
    const { request_key } = response.data; // const request_key = response.data.request_key;
    const qrcode = `https://klipwallet.com/?target=/a2a?request_key=${request_key}`
    setQrValue(qrcode);
    let timerId = setInterval(() => {
      axios.get(`https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`).then((res) => {
        if (res.data.result) {
          // console.log(`[RESULT] ${res.data.result}`);
          console.log(`[RESULT] ${JSON.stringify(res.data.result)}`);
          callback(res.data.result.klaytn_address);
          clearInterval(timerId);
        }
      })
    }, 1000)
  })
}

// 마켓에게 보내기 때문에 to가 필요 없음
export const listingCards = async (fromAddress, tokenId, setQrValue, callback) => {
  const functionJSON = '{ "constant": false, "inputs": [ { "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }'
  executeContract(NFT_CONTRACT_ADDRESS, functionJSON, "0", `[\"${fromAddress}\",\"${MARKET_CONTRACT_ADDRESS}\",\"${tokenId}\"]`, setQrValue, callback);
}

// NFT 구매
export const buyCard = async (tokenId, setQrValue, callback) => {
  const functionJSON = '{ "constant": false, "inputs": [ { "name": "tokenId", "type": "uint256" }, { "name": "NFTAddress", "type": "address" } ], "name": "buyNFT", "outputs": [ { "name": "", "type": "bool" } ], "payable": true, "stateMutability": "payable", "type": "function" }'
  executeContract(MARKET_CONTRACT_ADDRESS, functionJSON, "10000000000000000", `[\"${tokenId}\",\"${NFT_CONTRACT_ADDRESS}\"]`, setQrValue, callback);
}


export const mintCardWithURI = async (toAddress, tokenId, uri, setQrValue, callback) => {
  const functionJSON = '{ "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" }, { "name": "tokenURI", "type": "string" } ], "name": "mintWithTokenURI", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }'
  executeContract(NFT_CONTRACT_ADDRESS, functionJSON, "0", `[\"${toAddress}\",\"${tokenId}\",\"${uri}\"]`, setQrValue, callback);
}

export const executeContract = (txTo, functionJSON, value, params, setQrValue, callback) => {
  axios.post(
    A2P_API_PREPARE_URL, {
    bapp: {
      name: APP_NAME,
    },
    type: "execute_contract",
    transaction: {
      to: txTo,
      value: value,
      abi: functionJSON, // 실행할 함수
      params: params,
    }
  }
  ).then((response) => {
    const { request_key } = response.data; // const request_key = response.data.request_key;
    const qrcode = `https://klipwallet.com/?target=/a2a?request_key=${request_key}`
    setQrValue(qrcode);
    let timerId = setInterval(() => {
      axios.get(`https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`).then((res) => {
        if (res.data.result) {
          // console.log(`[RESULT] ${res.data.result}`);
          console.log(`[RESULT] ${JSON.stringify(res.data.result)}`);
          callback(res.data.result);
          if (res.data.result.status === 'success') {
            clearInterval(timerId);
          }
        }
      })
    }, 1000)
  })
}

export const setCount = (count, setQrValue) => {
  
  axios.post(
    A2P_API_PREPARE_URL, {
      bapp: {
        name: APP_NAME,
      },
      type: "execute_contract",
      transaction: {
        to: COUNT_CONTRACT_ADDRESS,
        value: "0",
        abi: '{ "constant": false, "inputs": [ { "name": "_count", "type": "uint256" } ], "name": "setCount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }', // 실행할 함수
        params: `[\"${count}\"]`,
      }
    } 
  ).then((response) => {
    const { request_key } = response.data; // const request_key = response.data.request_key;
    const qrcode = `https://klipwallet.com/?target=/a2a?request_key=${request_key}`
    setQrValue(qrcode);
    let timerId = setInterval(() => {
      axios.get(`https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`).then((res) => {
        if (res.data.result) {
          // console.log(`[RESULT] ${res.data.result}`);
          console.log(`[RESULT] ${JSON.stringify(res.data.result)}`);
          if (res.data.result.status === 'success') {
            clearInterval(timerId);
          }
        }
      })
    }, 1000)
  })
}