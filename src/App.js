import { useEffect, useState } from "react";
// https://api.coinpaprika.com/v1/tickers

function Coin({coins,convertCoin}){
  const coinChange = (event) => {
    convertCoin(event.target.value)
  }
  return (
    <select onChange={coinChange}>
      <option value={""}>코인을 선택해주세요</option>
      {coins.map((item,index) => (
        <option key={index} value={item.quotes.USD.price}>{item.name} ({item.symbol}) : ${item.quotes.USD.price}</option>
      ))}
    </select>
  );
}

function App() {

  const [pay,setPay] = useState("")
  const [loading,setLoading] = useState(true)
  const [coins,setCoins] = useState([])
  const [targetCoin,setTargetCoin] = useState(0)
  const [realCoin,setRealCoin] = useState(0)

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) =>{
      setCoins(json)
      setLoading(false)
    })
  },[])

  useEffect(()=>{
    if(targetCoin !== "" && pay !== ""){
      setRealCoin(Number(pay) / Number(targetCoin))
    }
  },[pay,targetCoin])

  const payChange = (event) => setPay(event.target.value)

  const convertCoin = (coin) => {
    setTargetCoin(coin)
  }

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      <input value={pay} onChange={payChange} type="text" placeholder="달러를 입력하세요"/><br></br><br></br>
      {loading ? <strong>Loading...</strong> : <Coin coins={coins} convertCoin={convertCoin}/>}<br></br>
      코인 갯수 : {realCoin}
    </div>
  );
}

export default App;
