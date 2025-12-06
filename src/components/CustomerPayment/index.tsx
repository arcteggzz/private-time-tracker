/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrlApi = "https://waas-staging.embedly.ng/api/v1"; // CHANGE THIS
const APIKey =
  "BSK-O8IcVXho80WKUjNKu6uD9QVPrfOI1VsEyxb5MVSCcPeWIKqKcOLejiElQIbsJGTvRlMyHWGakrx6"; // CHANGE THIS

export default function CustomerPayment() {
  const [qrData, setQrData] = useState<any>(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [walletDetails, setWalletDetails] = useState<any>(null);
  const [validating, setValidating] = useState(false);
  const [paying, setPaying] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get("data");

    if (encoded) {
      const decoded = JSON.parse(decodeURIComponent(encoded));
      setQrData(decoded);
    }
  }, []);

  const validateWallet = async () => {
    setValidating(true);
    try {
      const res = await axios.get(
        `${baseUrlApi}/wallets/get/wallet/account/${accountNumber}`,
        {
          headers: {
            "x-api-key": APIKey,
          },
        }
      );
      setWalletDetails(res.data);
    } catch (e: any) {
      console.log(e);
      alert("Failed to validate wallet");
    } finally {
      setValidating(false);
    }
  };

  const makePayment = async () => {
    setPaying(true);
    const body = {
      fromAccount: accountNumber,
      toAccount: qrData.toAccount,
      amount: qrData.amount,
      transactionReference: `QR-DEMO-${Date.now()}`,
      remarks: qrData.paymentName || "",
    };

    try {
      await axios.post(
        `${baseUrlApi}/wallets/wallet/transaction/v2/wallet-to-wallet`,
        body,
        {
          headers: {
            "x-api-key": APIKey,
          },
        }
      );
      setShowSuccess(true);
    } catch (e: any) {
      console.log(e);
      alert("Payment failed");
    } finally {
      setPaying(false);
    }
  };

  if (!qrData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading payment details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
        <h1 className="text-xl font-bold mb-4">
          Securely complete your payment
        </h1>

        <p className="text-lg mb-2 font-semibold">{qrData.paymentName}</p>
        <p className="text-2xl font-bold mb-4">₦{qrData.amount}</p>

        <input
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          placeholder="Your Account Number"
          maxLength={10}
          className="w-full border p-3 rounded mb-3"
        />

        <button
          onClick={validateWallet}
          disabled={accountNumber.length !== 10 || validating}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300"
        >
          {validating ? "Validating..." : "Validate"}
        </button>

        {walletDetails && (
          <div className="mt-4 p-3 rounded bg-gray-50 border">
            <p className="font-semibold">{walletDetails.walletName}</p>
            <p className="text-sm text-gray-600">
              Balance: ₦{walletDetails.availableBalance}
            </p>
          </div>
        )}

        {walletDetails && !showSuccess && (
          <button
            onClick={makePayment}
            disabled={paying}
            className="w-full mt-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300"
          >
            {paying ? "Processing..." : "Make Payment"}
          </button>
        )}
      </div>

      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold mb-3">
              Yayy! Payment Successful 🎉
            </h2>
            <p className="text-gray-600 mb-4">
              Your payment has been processed successfully.
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Exit Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
