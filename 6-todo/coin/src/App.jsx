import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    console.log("Use API");

    fetch("https://api.coinpaprika.com/v1/tickers").then((response) =>
      response.json().then((json) => {
        setCoins(json);
        setLoading(false);
      })
    );
  }, []);

  return (
    <>
      <h1>The Coins! {loading ? null : coins.length} </h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.symbol}: ${coin.quotes.USD.price.toFixed(2)}
            </option>
          ))}
        </select>
      )}
    </>
  );
}

export default App;
