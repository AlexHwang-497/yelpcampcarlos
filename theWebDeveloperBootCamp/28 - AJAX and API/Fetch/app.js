// ////////////this is the promise version

// fetch('https://api.cryptonator.com/api/full/btc-usd')
// .then(res=>{
//     console.log('RESPONSE, WAITING TO PARSE....', res)
//     return res.json()
// })
// .then(data=>{
//     console.log('DATA PARSED...',data)
//     console.log(data.ticker.price)
// })
// .catch(e=>{
//     console.log('Oh NO!!!! ERROR!!!!',e)
// })


////////////this is the async version
const fetchBitcoinPrice = async() => {
    try{
        const res = await fetch('https://api.cryptonator.com/api/full/btc-usd')   
        // console.log(res)
        const data = await res.json()
        console.log(data.ticker.price)

    } catch(e){
        console.log('something went wrong!!!',e)
    }



}