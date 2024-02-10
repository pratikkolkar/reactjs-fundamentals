import { useState } from "react";
import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currenyInfo = useCurrencyInfo(from);

  const options = Object.keys(currenyInfo);

  const convertAmount = () => {
    setConvertedAmount(amount * Number(currenyInfo[to]));
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <>
      <InputBox
        label="From"
        amount={amount}
        isDisabled={false}
        currencyOptions={options}
        onCurrencyChange={(currency) => setFrom(currency)}
        selectCurrency={from}
        onAmountChange={(amount) => setAmount(amount)}
      />
      <div>
        <button type="button" onClick={swap}>
          Swap
        </button>
      </div>
      <InputBox
        label="To"
        amount={convertedAmount}
        isDisabled={true}
        currencyOptions={options}
        onCurrencyChange={(currency) => setTo(currency)}
        selectCurrency={to}
      />
      <button
        type="button"
        className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
        onClick={convertAmount}
      >
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>
    </>
  );
}

export default App;
