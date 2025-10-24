import JSEncrypt from "jsencrypt";
import { useState } from "react";

const embeddlyRsaEncrypt = (data: string, publicKey = "") => {
  try {
    const rsaPublickey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAx55Wws58iVEobh/ZeFsR
sLJJfSzcivxLQyKNKILfme+sA6+bKDC2gXiNyEp8378d/atC9uPH062t6S2rw1AO
P8xlZwSOSHgzE5m2fykyxCN9J+ZT6XMwola2iOLVPWz4DTlFvhFuawMb8S33eYl/
fS7YUaZCIcS9K+z3sm65ZR5gwqA8rmpSnEuVpyDcBoGEsvNM7LdDeft97w+bxUgS
y12U/jCft/AzI0JSGFnCdpDewVyFB/wu2TkGL6j9fvZFC89/MwqM5KXhc6tXr8p9
K7dgrmJeHdRhZiJx/FZPzLF7MBydt066o0RAbVOXqaAML067h4uxeHe6AccLe190
WwIDAQAB
-----END PUBLIC KEY-----`;

    publicKey = publicKey || rsaPublickey;

    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);

    const encrypted = encrypt.encrypt(data);
    if (!encrypted) {
      throw new Error("Encryption failed");
    }

    return encrypted;
  } catch (error) {
    throw new Error(
      `RSA encryption failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

const Encrypt = () => {
  const [userInput, setUserInput] = useState("");

  const encryptInput = () => {
    const encrypted = embeddlyRsaEncrypt(userInput);
    setEncryptedInput(encrypted);
  };

  const [encryptedInput, setEncryptedInput] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen text-gray-800 bg-gray-50 text-wrap">
      <div>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mr-2 w-80"
        />

        <button
          onClick={encryptInput}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition"
        >
          Encrypt
        </button>
      </div>

      <div className="mt-6 p-4 border border-gray-300 rounded w-11/12 max-w-4xl bg-white flex text-wrap">
        <p className="w-9/12 text-wrap max-w-full">{encryptedInput}</p>
      </div>

      <button
        onClick={() => navigator.clipboard.writeText(encryptedInput)}
        className="ml-4 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
        disabled={!encryptedInput}
      >
        Copy
      </button>
    </div>
  );
};

export default Encrypt;
