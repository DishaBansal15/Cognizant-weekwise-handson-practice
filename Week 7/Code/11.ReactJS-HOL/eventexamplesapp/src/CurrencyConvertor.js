import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const conversionRate = 100.75; // 1 INR ≈ 0.011 EUR
    const converted = parseFloat(rupees) * conversionRate;
    alert("Converting to Euro Amount is:"+converted.toFixed(2));
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <label>Amount</label>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          required
        />
        <label>Currency</label>
        <input type="text"  />
        <button type="submit">Convert</button>
      </form>

    </div>
  );
}

export default CurrencyConvertor;
