import { useState } from "react";
import { Link } from "react-router-dom";

const InputFieldWithLabel = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div className="mb-4">
    <label className="block text-gray-600 text-sm mb-1">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full p-2 border rounded-lg shadow-sm focus:outline-none"
    />
  </div>
);

const Button = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition cursor-pointer"
  >
    {label}
  </button>
);

const WalletManagementFlow = () => {
  const [step, setStep] = useState(1);

  const goToNextStep = () => setStep(step + 1);
  const goToStep = (s: number) => setStep(s);

  const FusionSignUp = () => (
    <div className="space-y-4 w-full max-w-md">
      <h2 className="text-2xl font-semibold">Fusion Sign Up</h2>
      <InputFieldWithLabel label="Email" placeholder="Enter email" />
      <InputFieldWithLabel label="Password" placeholder="Enter password" />
      <Button label="Sign Up" onClick={goToNextStep} />
    </div>
  );

  const FusionLogin = () => (
    <div className="space-y-4 w-full max-w-md">
      <h2 className="text-2xl font-semibold">Fusion Log In</h2>
      <InputFieldWithLabel label="Email" placeholder="Enter email" />
      <InputFieldWithLabel label="Password" placeholder="Enter password" />
      <Button label="Log In" onClick={goToNextStep} />
    </div>
  );

  const WalletManagement = () => (
    <div className="space-y-6 w-full max-w-6xl">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-4 shadow">
          Total Wallets: <strong>3</strong>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow">
          Total Balance: <strong>₦1,000.00</strong>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow">
          Total Transactions: <strong>10</strong>
        </div>
      </div>

      <table className="w-full text-left shadow rounded-2xl overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Account Number</th>
            <th className="p-3">Wallet Balance</th>
            <th className="p-3">Merchant Name</th>
            <th className="p-3">Wallet Type</th>
            <th className="p-3">View</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((i) => (
            <tr key={i} className="border-t">
              <td className="p-3">123456789{i}</td>
              <td className="p-3">₦{(100 * i).toFixed(2)}</td>
              <td className="p-3">Merchant {i}</td>
              <td className="p-3">Type {i}</td>
              <td
                className="p-3 text-blue-600 cursor-pointer"
                onClick={() => goToStep(4)}
              >
                View
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const WalletDetails = () => (
    <div className="space-y-6 w-full max-w-6xl">
      <Button label="Back" onClick={() => goToStep(3)} />
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-4 shadow">
          <p>Account No: 1234567890</p>
          <p>Bank: Embedly Bank</p>
          <p>Name: Emmanuel</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow">
          <p>Wallet Balance</p>
          <h3 className="text-xl font-bold">₦1000.00</h3>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow">
          <p>Merchant: Embedly</p>
          <div className="w-10 h-10 bg-gray-300 rounded-full mt-2"></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          "Make Payment",
          "Change PIN",
          "Block Wallet",
          "NFC Card",
          "Debit Card",
          "Fund Wallet",
        ].map((action) => (
          <div
            key={action}
            className="bg-white p-3 rounded-xl shadow cursor-pointer text-center"
          >
            {action}
          </div>
        ))}
      </div>

      <table className="w-full text-left shadow rounded-2xl overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Date</th>
            <th className="p-3">Type</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((i) => (
            <tr key={i} className="border-t">
              <td className="p-3">2025-07-04</td>
              <td className="p-3">Credit</td>
              <td className="p-3">₦100.00</td>
              <td className="p-3">Success</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-gray-50">
      <nav className="h-[8vh] bg-white flex justify-between items-center px-4 backdrop-blur-[40px] shadow-sm shadow-gray-100">
        <div className="flex items-center gap-28">
          <Link to={"/"} className="flex items-center cursor-pointer">
            <img src="/logo-dark-2.svg" alt="fusion-icon" />
            {/* <h1 className="text-2xl font-bold bg-gradient-to-r from-[#FFB205] to-[#4C006B] bg-clip-text text-transparent">
              reels
            </h1> */}
            <h1 className="text-2xl font-bold text-[#FFB205]">blob</h1>
          </Link>

          {/* <div className="flex items-center gap-8">
            <p className="text-gray-brand12 hover:text-gray-brand12/80 cursor-pointer">
              WebApp
            </p>
            <p className="text-gray-brand12 hover:text-gray-brand12/80 cursor-pointer">
              Explore Events
            </p>
          </div> */}
        </div>

        <button className="border-none h-10 text-white font-normal text-center text-sm px-8 rounded-lg bg-gradient-to-r from-[#ff9d00] to-[#9d4edd] cursor-pointer">
          Become a Creator
        </button>
      </nav>

      <main className="h-[87vh] flex justify-center items-center px-6">
        {step === 1 && <FusionSignUp />}
        {step === 2 && <FusionLogin />}
        {step === 3 && <WalletManagement />}
        {step === 4 && <WalletDetails />}
      </main>

      <footer className="h-[5vh] bg-white shadow flex items-center justify-center text-sm">
        Powered by Embedly
      </footer>
    </div>
  );
};

export default WalletManagementFlow;
