function PostingHelper() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function generateTransactionCalls(data: any[]) {
    return data.map(
      (item) =>
        `call POST_TRANSACTION_V7('${item.CustomerId}',50,0,'${item.Remarks}','${item.ProductId}',NOW(),'${item.AccountNumber}','${item.TransactionReference}','${item.TransactionReference}',@status,@message); UPDATE PendingStampDutyPosting
SET isProcessed = 1
WHERE id = '${item.Id}';`
    );
  }

  const transactions = [
    {
      Id: "58494c8e-a309-11f0-8d44-4af84d9ff6f1",
      CustomerId: "46567772-8f0d-11f0-8d44-4af84d9ff6f1",
      Amount: 50.0,
      Fee: 0.0,
      Remarks: "Charge for Stamp Duty for NIP Inflow",
      ProductId: "17f53dcf-a26e-11f0-8d44-4af84d9ff6f1",
      DateCreated: "2025-10-06 23:08:17",
      AccountNumber: "9710215774",
      TransactionReference: "M-SDN-000017251006121701393895357047",
    },
    {
      Id: "58495489-a309-11f0-8d44-4af84d9ff6f1",
      CustomerId: "3f421c67-5ddb-11f0-8d44-4af84d9ff6f1",
      Amount: 50.0,
      Fee: 0.0,
      Remarks: "Charge for Stamp Duty for NIP Inflow",
      ProductId: "22fe69b7-a107-11f0-8d44-4af84d9ff6f1",
      DateCreated: "2025-10-06 23:08:17",
      AccountNumber: "9710151253",
      TransactionReference: "M-SDN-100004251006091551142513042620",
    },
  ];

  console.log(generateTransactionCalls(transactions).join("\n"));

  return (
    <>
      <div>PostingHelper</div>
    </>
  );
}

export default PostingHelper;
