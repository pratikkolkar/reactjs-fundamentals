/* eslint-disable react/prop-types */
import { useId } from "react";

function InputBox({
  label,
  amount,
  isDisabled,
  currencyOptions = [],
  onCurrencyChange,
  selectCurrency,
  onAmountChange,
}) {
  const amountInputId = useId();
  return (
    <div style={{ border: "2px solid black", padding: "5px", display: "flex" }}>
      <div
        style={{
          border: "2px solid red",
          padding: "5px",
          margin: "5px",
          flexGrow: "9",
        }}
      >
        <label htmlFor={amountInputId}>{label}</label>
        <br />
        <input
          id={amountInputId}
          type="number"
          value={amount}
          disabled={isDisabled}
          placeholder="Amount"
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
        />
      </div>
      <div
        style={{
          border: "2px solid blue",
          padding: "5px",
          margin: "5px",
          flexGrow: "1",
        }}
      >
        <label htmlFor="">Currency Type</label>
        <br />
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
