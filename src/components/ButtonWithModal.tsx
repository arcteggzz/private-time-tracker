import { useState } from "react";

const ButtonWithModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appData, setAppData] = useState<never[]>([]);

  console.log(appData);

  const handleConfirm = () => {
    try {
      const existingData = localStorage.getItem("appData");
      const parsedData = existingData ? JSON.parse(existingData) : [];

      setAppData(parsedData);

      const now = new Date();
      const dayOfWeek = now.toLocaleDateString("en-NG", {
        weekday: "long",
      });
      const formattedDate = now.toLocaleDateString("en-GB"); // DD/MM/YYYY
      const formattedTime = now.toLocaleTimeString("en-NG", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const newEntry = {
        id: Math.floor(now.getTime() / 1000),
        day: dayOfWeek,
        date: formattedDate,
        time: formattedTime,
      };

      const updatedData = [...parsedData, newEntry];
      localStorage.setItem("appData", JSON.stringify(updatedData));

      alert("Successfully saved to local storage");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving to local storage:", error);
    }
  };

  return (
    <div
      className="w-screen h-screen bg-[#2a2738] flex items-center justify-center font-[Inter]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#6e56b6] text-white p-4 rounded-full w-24 h-24 flex items-center justify-center text-lg shadow-lg hover:opacity-90 transition cursor-pointer"
      >
        Add
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-[#2a2738] p-6 rounded-2xl text-white shadow-xl max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">Confirm Action</h2>
            <p className="mb-6">Are you sure you want to add this entry?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-[#6e56b6] hover:opacity-90 transition cursor-pointer"
              >
                Discard
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 rounded-lg bg-[#6e56b6] hover:opacity-90 transition cursor-pointer"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonWithModal;
