import axios from "axios";

export const getAddress = (setQrValue) => {
  
  axios.post(
    "https://a2a-api.klipwallet.com/v2/a2a/prepare", {
      bapp: {
        name: 'KLAY_MARKET'
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
          clearInterval(timerId);
        }
      })
    }, 1000)
  })
}