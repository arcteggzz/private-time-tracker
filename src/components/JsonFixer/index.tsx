function JsonFixer() {
  //   const trxList = `
  // 5924dba1-b3e0-11f0-8d44-4af84d9ff6f1,500
  // 5924e65e-b3e0-11f0-8d44-4af84d9ff6f1,0
  // 36837031-b3ea-11f0-8d44-4af84d9ff6f1,500
  // 36837993-b3ea-11f0-8d44-4af84d9ff6f1,0
  // 06ec479d-b3eb-11f0-8d44-4af84d9ff6f1,1000
  // 06ec583c-b3eb-11f0-8d44-4af84d9ff6f1,0
  // de1e8340-b49b-11f0-8d44-4af84d9ff6f1,100
  // de1e8d04-b49b-11f0-8d44-4af84d9ff6f1,0
  // d5b331df-b4b1-11f0-8d44-4af84d9ff6f1,200
  // d5b33cf5-b4b1-11f0-8d44-4af84d9ff6f1,0
  // d611c245-b4b1-11f0-8d44-4af84d9ff6f1,200
  // d611cc31-b4b1-11f0-8d44-4af84d9ff6f1,0
  // 9010cc48-b4bb-11f0-8d44-4af84d9ff6f1,200
  // 9010d44a-b4bb-11f0-8d44-4af84d9ff6f1,0
  // 5f0fae87-b4c4-11f0-8d44-4af84d9ff6f1,200
  // 5f0fb990-b4c4-11f0-8d44-4af84d9ff6f1,0
  // 0fa321b5-b4ee-11f0-8d44-4af84d9ff6f1,200
  // 7eb9efcc-b501-11f0-8d44-4af84d9ff6f1,100
  // 7eba128b-b501-11f0-8d44-4af84d9ff6f1,90
  // 69350ed7-b509-11f0-8d44-4af84d9ff6f1,290
  // 249b5012-b534-11f0-8d44-4af84d9ff6f1,286.25
  // 26e8b272-b534-11f0-8d44-4af84d9ff6f1,236.25
  // 38584d75-b534-11f0-8d44-4af84d9ff6f1,232.5
  // 46a1832a-b534-11f0-8d44-4af84d9ff6f1,182.5
  // e7341725-b572-11f0-8d44-4af84d9ff6f1,382.5
  // 18fd6a61-b574-11f0-8d44-4af84d9ff6f1,582.5
  // 18fd7424-b574-11f0-8d44-4af84d9ff6f1,382.5
  // 092e1587-b58a-11f0-8d44-4af84d9ff6f1,585.3
  // d8f89864-b58a-11f0-8d44-4af84d9ff6f1,385.3
  // d8f8ce72-b58a-11f0-8d44-4af84d9ff6f1,375.3`;

  // function generateUpdateStatements(input: string) {
  //   const lines = input.trim().split("\n");
  //   const statements = lines.map((line) => {
  //     const [id, balance] = line.split(",");
  //     return `UPDATE Wallets\nSET Balance = ${balance}\nWHERE Id = '${id}';`;
  //   });
  //   return statements.join("\n\n");
  // }
  // console.log(generateUpdateStatements(trxList));

  // const generateAndDownloadFile = (inputData: string) => {
  //   // Split the input by lines
  //   const lines = inputData.trim().split("\n");

  //   // Map into SQL statements
  //   const statements = lines
  //     .map((line) => {
  //       const [id, balance] = line.split(",");
  //       return `UPDATE Wallets\nSET Balance = ${balance}\nWHERE Id = '${id}';`;
  //     })
  //     .join("\n\n");

  //   // Create a blob and trigger download
  //   const blob = new Blob([statements], { type: "text/plain" });
  //   const url = window.URL.createObjectURL(blob);
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.download = "wallet_updates.txt";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  //   window.URL.revokeObjectURL(url);
  // };

  return (
    <>
      <div>
        {" "}
        {/* <button
          onClick={() => generateAndDownloadFile(trxList)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Download SQL File
        </button> */}
      </div>
    </>
  );
}

export default JsonFixer;
