import React, { useState } from "react";
import { Link } from "react-router-dom";

const steps = [
  "Introduction",
  "Biodata",
  "Email & Phone Verification",
  "KYC",
  "KYC OTP",
  "Biodata Summary",
  "Set PIN",
  "Success",
];

const orgname = "Plearnty";

const InputFieldWithLabel = ({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) => (
  <div className="mb-4 text-left">
    <label className="block text-gray-400 text-sm mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder || label}
      className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-700 shadow-sm cursor-pointer"
  >
    {text}
  </button>
);

const OtpInput = () => (
  <div className="flex space-x-2 justify-center">
    {Array.from({ length: 6 }).map((_, i) => (
      <input
        key={i}
        maxLength={1}
        className="w-10 h-12 text-center border rounded shadow-sm focus:outline-none"
        type="text"
      />
    ))}
  </div>
);

const Step1 = ({ onNext }: { onNext: () => void }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
    <h2 className="text-xl text-gray-700 mb-4 font-semibold">
      Create a Wallet for <span className="text-blue-600">{orgname}</span>
    </h2>
    <p className="text-gray-500 mb-4">Steps to complete:</p>
    <ul className="list-disc list-inside text-gray-400">
      {steps.slice(1).map((step, idx) => (
        <li key={idx}>{step}</li>
      ))}
    </ul>
    <Button text="Get Started" onClick={onNext} />
  </div>
);

const Step2 = ({ onNext }: { onNext: () => void }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
    <InputFieldWithLabel label="First Name" />
    <InputFieldWithLabel label="Last Name" />
    <InputFieldWithLabel label="Middle Name" />
    <InputFieldWithLabel label="Date of Birth" type="date" />
    <InputFieldWithLabel label="Email" type="email" />
    <InputFieldWithLabel label="Phone Number" type="tel" />
    <InputFieldWithLabel label="Gender" />
    <Button text="Next" onClick={onNext} />
  </div>
);

const Step3 = ({ onNext }: { onNext: () => void }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
    <p className="text-gray-600 mb-2">Email Verification</p>
    <OtpInput />
    <p className="text-gray-600 mt-4 mb-2">Phone Verification</p>
    <OtpInput />
    <Button text="Next" onClick={onNext} />
  </div>
);

const Step4 = ({ onNext }: { onNext: () => void }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
    <div className="flex gap-4">
      {["NIN", "BVN"].map((type) => (
        <div
          key={type}
          className="flex-1 p-4 border rounded-lg shadow-sm cursor-pointer"
        >
          <p className="text-center text-gray-700 font-semibold">{type}</p>
          <InputFieldWithLabel label={`${type} Number`} />
          <Button text="Verify" onClick={onNext} />
        </div>
      ))}
    </div>
  </div>
);

const Step5 = ({ onNext }: { onNext: () => void }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
    <p className="text-gray-600 mb-2">Enter OTP for Verification</p>
    <OtpInput />
    <Button text="Continue" onClick={onNext} />
  </div>
);

const Step6 = ({ onNext }: { onNext: () => void }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
    <p className="text-gray-700 mb-4">
      Review your biodata and click create wallet.
    </p>
    <ul className="text-sm text-gray-500 mb-4 space-y-1">
      <li>First Name: John</li>
      <li>Last Name: Doe</li>
      <li>Email: john@example.com</li>
    </ul>
    <Button text="Create Wallet" onClick={onNext} />
  </div>
);

const Step7 = ({ onNext }: { onNext: () => void }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
    <h2 className="text-gray-700 mb-2">Wallet Created: 1234567890</h2>
    <p className="text-gray-500 mb-2">Set a 6-digit PIN</p>
    <OtpInput />
    <p className="text-gray-500 mt-4">Confirm PIN</p>
    <OtpInput />
    <Button text="Set PIN" onClick={onNext} />
  </div>
);

const Step8 = () => (
  <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
    <h2 className="text-green-600 text-xl font-bold mb-4">
      Wallet Created Successfully!
    </h2>
    <p className="text-gray-700 mb-2">Account Number: 1234567890</p>
    <p className="text-gray-500">Bank Name: Sterling Bank</p>
    <p className="text-gray-500 mb-4">PIN set successfully</p>
    <Button
      text="Transact"
      onClick={() => alert("Redirecting to dashboard...")}
    />
  </div>
);

const WalletCreationFlow: React.FC = () => {
  const [step, setStep] = useState(1);
  const next = () => setStep(step + 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 onNext={next} />;
      case 2:
        return <Step2 onNext={next} />;
      case 3:
        return <Step3 onNext={next} />;
      case 4:
        return <Step4 onNext={next} />;
      case 5:
        return <Step5 onNext={next} />;
      case 6:
        return <Step6 onNext={next} />;
      case 7:
        return <Step7 onNext={next} />;
      case 8:
        return <Step8 />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col">
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

      <main className="flex-1 h-[87vh] flex items-center justify-center bg-gray-100">
        {renderStep()}
      </main>

      <footer className="h-[5vh] bg-white shadow-inner text-center text-gray-400 flex items-center justify-center text-sm">
        Powered by Embedly
      </footer>
    </div>
  );
};

export default WalletCreationFlow;
