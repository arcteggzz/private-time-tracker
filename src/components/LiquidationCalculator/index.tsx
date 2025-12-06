import { useState } from "react";

export default function LiquidationCalculator() {
  const [entryPrice, setEntryPrice] = useState(0);
  const [leverage, setLeverage] = useState(1);
  const [balance, setBalance] = useState(0);
  const [liqPrice, setLiqPrice] = useState(0 as string | number);

  // Simple liquidation formula (isolated margin, long)
  // liq = entryPrice * (1 - 1/leverage)
  function calculate() {
    if (!entryPrice || !leverage) return;
    const result = entryPrice * (1 - 1 / leverage);
    setLiqPrice(result.toFixed(2));
  }

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Liquidation Price Calculator</h1>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Entry Price (USD)</label>
        <input
          type="number"
          className="w-full p-2 border rounded-xl"
          value={entryPrice}
          onChange={(e) => setEntryPrice(Number(e.target.value))}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Leverage (e.g. 5)</label>
        <input
          type="number"
          className="w-full p-2 border rounded-xl"
          value={leverage}
          onChange={(e) => setLeverage(Number(e.target.value))}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">
          Margin / Position Size (optional)
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded-xl"
          value={balance}
          onChange={(e) => setBalance(Number(e.target.value))}
        />
      </div>

      <button
        onClick={calculate}
        className="w-full p-3 bg-black text-white rounded-2xl font-semibold"
      >
        Calculate
      </button>

      {liqPrice && (
        <div className="mt-4 p-4 rounded-2xl border shadow-sm">
          <p className="text-lg font-semibold">Liquidation Price:</p>
          <p className="text-2xl font-bold">${liqPrice}</p>
        </div>
      )}
    </div>
  );
}
