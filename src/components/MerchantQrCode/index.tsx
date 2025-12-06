import { useState } from "react";
import QRCode from "react-qr-code";

export default function MerchantQRCode() {
  const [step, setStep] = useState<"welcome" | "form" | "qr">("welcome");
  const [destinationAccount, setDestinationAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentName, setPaymentName] = useState("");
  const [qrValue, setQrValue] = useState("");

  const baseUrl = window.location.origin;
  console.log("Base URL:", baseUrl);

  const generateInvoice = () => {
    const payload = {
      toAccount: destinationAccount,
      amount: Number(amount),
      paymentName: paymentName || "",
      paymentUrl: `${baseUrl}/v2/customer-payment`,
    };

    const encoded = encodeURIComponent(JSON.stringify(payload));
    const qrLink = `${baseUrl}/v2/customer-payment?data=${encoded}`;
    setQrValue(qrLink);

    setStep("qr");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      {step === "welcome" && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            Generate Payment Invoice Seamlessly
          </h1>
          <button
            onClick={() => setStep("form")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>
      )}

      {step === "form" && (
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Payment Details</h2>

          <input
            value={destinationAccount}
            onChange={(e) => setDestinationAccount(e.target.value)}
            placeholder="Destination Account Number"
            maxLength={10}
            className="w-full border p-3 rounded mb-3"
          />

          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount to Collect"
            type="number"
            className="w-full border p-3 rounded mb-3"
          />

          <input
            value={paymentName}
            onChange={(e) => setPaymentName(e.target.value)}
            placeholder="Payment Name (Optional)"
            className="w-full border p-3 rounded mb-3"
          />

          <button
            onClick={generateInvoice}
            disabled={!destinationAccount || !amount}
            className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300"
          >
            Generate Invoice
          </button>
        </div>
      )}

      {step === "qr" && (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Your Invoice QR Code</h2>
          <div className="bg-white p-4 rounded-xl shadow">
            <QRCode value={qrValue} size={220} />
          </div>
        </div>
      )}
    </div>
  );
}
