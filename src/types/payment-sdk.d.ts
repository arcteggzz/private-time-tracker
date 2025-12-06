declare global {
  interface Window {
    PaymentWidget: {
      pay: (options: {
        amount: string;
        onSuccess?: (msg: string) => void;
      }) => void;
    };
    CatsDogsSDK: {
      open: () => void;
    };
  }
}

export {};
