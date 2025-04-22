import React, { useEffect, useState } from "react";

const categoriesArray = [
  {
    categoryName: "Animals",
    wordsInCategory: [
      "Cat",
      "Snake",
      "Dog",
      "Butterfly",
      "Lion",
      "Hyena",
      "Polar Bear",
      "Giraffe",
      "Monkey",
      "Chicken",
    ],
  },
  {
    categoryName: "Countries",
    wordsInCategory: [
      "Nigeria",
      "France",
      "Brazil",
      "India",
      "Germany",
      "Canada",
      "Japan",
      "Kenya",
      "Egypt",
      "Italy",
    ],
  },
  {
    categoryName: "Fruits",
    wordsInCategory: [
      "Apple",
      "Banana",
      "Mango",
      "Pineapple",
      "Grapes",
      "Orange",
      "Strawberry",
      "Watermelon",
      "Papaya",
      "Kiwi",
    ],
  },
  {
    categoryName: "Colors",
    wordsInCategory: [
      "Red",
      "Blue",
      "Green",
      "Yellow",
      "Purple",
      "Orange",
      "Pink",
      "Black",
      "White",
      "Brown",
    ],
  },
  {
    categoryName: "Popular Artists",
    wordsInCategory: [
      "Eminem",
      "Drake",
      "Beyonce",
      "Rihanna",
      "Kanye",
      "Adele",
      "Sia",
      "Wizkid",
      "Burna Boy",
      "Davido",
    ],
  },
  {
    categoryName: "Occupation",
    wordsInCategory: [
      "Doctor",
      "Engineer",
      "Lawyer",
      "Teacher",
      "Chef",
      "Pilot",
      "Farmer",
      "Nurse",
      "Journalist",
      "Artist",
    ],
  },
  {
    categoryName: "Sports",
    wordsInCategory: [
      "Football",
      "Basketball",
      "Tennis",
      "Cricket",
      "Baseball",
      "Hockey",
      "Boxing",
      "Golf",
      "Volleyball",
      "Wrestling",
    ],
  },
];

const ImposterGame: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [numPlayers, setNumPlayers] = useState<number | null>(null);
  const [, setCategory] = useState<string | null>(null);
  const [showCategorySelect, setShowCategorySelect] = useState(false);
  const [playerWords, setPlayerWords] = useState<string[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number | null>(
    null
  );
  const [showWord, setShowWord] = useState(false);
  const [cycleDone, setCycleDone] = useState(false);

  const handleStart = () => {
    const input = prompt("Enter number of players:");
    const parsed = parseInt(input || "");
    if (!input || isNaN(parsed) || parsed <= 1) {
      alert("Please enter a valid integer greater than 1.");
      return;
    }
    setNumPlayers(parsed);
    setShowCategorySelect(true);
  };

  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory);
    const cat = categoriesArray.find(
      (c) => c.categoryName === selectedCategory
    );
    if (cat) {
      const words = [...cat.wordsInCategory];
      const normalWord = words[Math.floor(Math.random() * words.length)];

      const wordsForPlayers = Array(numPlayers!).fill(normalWord);
      const imposterIndex = Math.floor(Math.random() * numPlayers!);
      wordsForPlayers[imposterIndex] = "Imposter";

      setPlayerWords(wordsForPlayers);
      setShowCategorySelect(false);
      setGameStarted(true);
      setCurrentPlayerIndex(0);
    }
  };

  useEffect(() => {
    if (
      gameStarted &&
      currentPlayerIndex !== null &&
      currentPlayerIndex < playerWords.length
    ) {
      setShowWord(true);
      const showTimeout = setTimeout(() => {
        setShowWord(false);
        const hideTimeout = setTimeout(() => {
          setCurrentPlayerIndex((prev) => (prev !== null ? prev + 1 : null));
        }, 5000);
        return () => clearTimeout(hideTimeout);
      }, 5000);
      return () => clearTimeout(showTimeout);
    }

    if (gameStarted && currentPlayerIndex === playerWords.length) {
      setCycleDone(true);
      setGameStarted(false);
      setCurrentPlayerIndex(null);
    }
  }, [currentPlayerIndex, gameStarted, playerWords]);

  const resetGame = () => {
    setNumPlayers(null);
    setCategory(null);
    setPlayerWords([]);
    setShowWord(false);
    setCycleDone(false);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-6 bg-white text-black">
      {!gameStarted && !showCategorySelect && !cycleDone && (
        <button
          className="bg-[#6e56b6] text-white px-6 py-3 rounded-lg cursor-pointer"
          onClick={handleStart}
        >
          Start Game
        </button>
      )}

      {showCategorySelect && (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-lg font-semibold">Select a Category</h2>
          <div className="grid grid-cols-2 gap-4 max-w-sm">
            {categoriesArray.map((cat) => (
              <button
                key={cat.categoryName}
                onClick={() => handleCategorySelect(cat.categoryName)}
                className="bg-[#6e56b6] text-white px-4 py-2 rounded-lg text-sm cursor-pointer"
              >
                {cat.categoryName}
              </button>
            ))}
          </div>
        </div>
      )}

      {gameStarted &&
        currentPlayerIndex !== null &&
        currentPlayerIndex < playerWords.length && (
          <div className="flex flex-col items-center gap-4">
            <p className="text-xl font-semibold">
              Player {currentPlayerIndex + 1}
            </p>
            {showWord ? (
              <p className="text-3xl font-bold">
                {playerWords[currentPlayerIndex]}
              </p>
            ) : (
              <p className="text-xl italic text-gray-500">Pass the device...</p>
            )}
          </div>
        )}

      {cycleDone && (
        <button
          className="bg-[#6e56b6] text-white px-6 py-3 rounded-lg cursor-pointer"
          onClick={resetGame}
        >
          Start Game
        </button>
      )}
    </div>
  );
};

export default ImposterGame;
