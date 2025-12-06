// import React from "react";

function App() {
  const openPayment = () => {
    window.PaymentWidget.pay({
      amount: "₦21,000",
      onSuccess: (msg) => console.log(msg),
    });
  };
  const open = () => {
    window.CatsDogsSDK.open();
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Buy Cake 🎂</h1>
      <button onClick={openPayment} className="bg-red-300">
        Pay ₦21,000
      </button>
      <button onClick={open} className="bg-blue-300">
        Open CatsDogsSDK
      </button>
    </div>
  );
}

export default App;
