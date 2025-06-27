/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface categoryWordsType {
  categoryName: string;
  options: string[];
}

const MAX_QUESTIONS = 25;
const MAX_TEAMS = 4;

// const categoryWords: categoryWordsType[] = [
//   {
//     categoryName: "Colors",
//     options: ["PXPXPXPXPXPXPXPXPXPXP"],
//   },
//   {
//     categoryName: "Books of the bible",
//     options: ["Genesis", "Exodus", "Leviticus"],
//   },
//   {
//     categoryName: "Subjects in School",
//     options: ["Physics", "Chemistry", "Mathemactics"],
//   },
// ];

const categoryWords: categoryWordsType[] = [
  {
    categoryName: "Animals",
    options: [
      "Elephant",
      "Giraffe",
      "Lion",
      "Tiger",
      "Kangaroo",
      "Panda",
      "Zebra",
      "Monkey",
      "Bear",
      "Wolf",
      "Fox",
      "Deer",
      "Rabbit",
      "Crocodile",
      "Alligator",
      "Horse",
      "Goat",
      "Sheep",
      "Camel",
      "Leopard",
      "Cheetah",
      "Hippopotamus",
      "Rhinoceros",
      "Dog",
      "Cat",
    ],
  },
  {
    categoryName: "Countries",
    options: [
      "Nigeria",
      "Canada",
      "Brazil",
      "Germany",
      "France",
      "India",
      "China",
      "Japan",
      "Australia",
      "Italy",
      "Mexico",
      "Russia",
      "Spain",
      "Argentina",
      "SouthAfrica",
      "Egypt",
      "Kenya",
      "Turkey",
      "Greece",
      "Portugal",
      "Sweden",
      "Norway",
      "Netherlands",
      "Poland",
      "Thailand",
    ],
  },
  {
    categoryName: "Fruits",
    options: [
      "Apple",
      "Banana",
      "Mango",
      "Orange",
      "Pineapple",
      "Grapes",
      "Strawberry",
      "Blueberry",
      "Peach",
      "Plum",
      "Cherry",
      "Watermelon",
      "Lemon",
      "Lime",
      "Kiwi",
      "Papaya",
      "Guava",
      "Coconut",
      "Apricot",
      "Fig",
      "Date",
      "Pomegranate",
      "Avocado",
      "Raspberry",
      "Tangerine",
    ],
  },
  {
    categoryName: "Colors",
    options: [
      "Red",
      "Blue",
      "Green",
      "Yellow",
      "Purple",
      "Orange",
      "Black",
      "White",
      "Pink",
      "Brown",
      "Gray",
      "Cyan",
      "Magenta",
      "Teal",
      "Maroon",
      "Beige",
      "Indigo",
      "Violet",
      "Turquoise",
      "Silver",
      "Gold",
      "Lavender",
      "Navy",
      "Olive",
      "Coral",
    ],
  },
  {
    categoryName: "Popular Artists",
    options: [
      "Drake",
      "Beyonce",
      "Adele",
      "Rihanna",
      "Eminem",
      "Wizkid",
      "Davido",
      "TaylorSwift",
      "Burnaboy",
      "BrunoMars",
      "JustinBieber",
      "TheWeeknd",
      "ChrisBrown",
      "DojaCat",
      "BillieEilish",
      "EdSheeran",
      "Sia",
      "NickiMinaj",
      "LilNasX",
      "PostMalone",
      "ArianaGrande",
      "KanyeWest",
      "Tems",
      "Usher",
      "Shakira",
    ],
  },
  {
    categoryName: "Occupation",
    options: [
      "Doctor",
      "Lawyer",
      "Engineer",
      "Teacher",
      "Nurse",
      "Pilot",
      "Chef",
      "Farmer",
      "Scientist",
      "Artist",
      "Dentist",
      "Mechanic",
      "Pharmacist",
      "Architect",
      "Journalist",
      "Actor",
      "Musician",
      "Banker",
      "Plumber",
      "Electrician",
      "Surgeon",
      "Driver",
      "Soldier",
      "Tailor",
      "Cashier",
    ],
  },
  {
    categoryName: "Sports",
    options: [
      "Football",
      "Basketball",
      "Tennis",
      "Cricket",
      "Hockey",
      "Volleyball",
      "Rugby",
      "Golf",
      "Boxing",
      "Wrestling",
      "Baseball",
      "Badminton",
      "Cycling",
      "Swimming",
      "Skating",
      "Karate",
      "Judo",
      "Fencing",
      "Archery",
      "Diving",
      "Rowing",
      "Surfing",
      "Motorsport",
      "Snooker",
      "TableTennis",
    ],
  },
  {
    categoryName: "Languages",
    options: [
      "English",
      "French",
      "Spanish",
      "German",
      "Mandarin",
      "Arabic",
      "Hindi",
      "Portuguese",
      "Swahili",
      "Russian",
      "Italian",
      "Turkish",
      "Korean",
      "Japanese",
      "Dutch",
      "Greek",
      "Thai",
      "Polish",
      "Hebrew",
      "Vietnamese",
      "Zulu",
      "Igbo",
      "Yoruba",
      "Hausa",
      "Amharic",
    ],
  },
  {
    categoryName: "Popular Marvel Movies",
    options: [
      "Endgame",
      "InfinityWar",
      "BlackPanther",
      "IronMan",
      "Thor",
      "CaptainAmerica",
      "SpiderMan",
      "DoctorStrange",
      "AntMan",
      "Guardians",
      "WakandaForever",
      "CivilWar",
      "Avengers",
      "Loki",
      "Eternals",
      "ShangChi",
      "Multiverse",
      "NoWayHome",
      "Homecoming",
      "FarFromHome",
      "Deadpool",
      "Hawkeye",
      "MoonKnight",
      "MsMarvel",
      "SheHulk",
    ],
  },
  {
    categoryName: "Building materials",
    options: [
      "Bricks",
      "Cement",
      "Sand",
      "Gravel",
      "Concrete",
      "Steel",
      "Wood",
      "Glass",
      "Aluminum",
      "Iron",
      "Tiles",
      "Marble",
      "Granite",
      "Clay",
      "Asphalt",
      "Plastic",
      "PVC",
      "Bamboo",
      "Stone",
      "Fiber",
      "Copper",
      "Gypsum",
      "Lime",
      "Slate",
      "Foam",
    ],
  },
  {
    categoryName: "Social Media Websites",
    options: [
      "Facebook",
      "Instagram",
      "Twitter",
      "Snapchat",
      "TikTok",
      "LinkedIn",
      "Reddit",
      "YouTube",
      "WhatsApp",
      "Pinterest",
      "Telegram",
      "WeChat",
      "Tumblr",
      "Discord",
      "Clubhouse",
      "Quora",
      "Viber",
      "Line",
      "Twitch",
      "Flickr",
      "Skype",
      "Signal",
      "Threads",
      "BeReal",
      "X",
    ],
  },
  {
    categoryName: "Nigerian Presidents",
    options: [
      "Obasanjo",
      "Buhari",
      "Jonathan",
      "YarAdua",
      "Shagari",
      "Balewa",
      "Gowon",
      "Muritala",
      "Shonekan",
      "Abacha",
      "Abdulsalami",
      "Ironsi",
      "Tinubu",
      "NnamdiAzikiwe",
      "Goodluck",
      "Muhammadu",
      "Umaru",
      "Shehu",
      "Olusegun",
      "Sani",
      "Ibrahim",
      "Ernest",
      "MichaelOkpara",
      "Azikiwe",
      "Osinbajo",
    ],
  },
  {
    categoryName: "Nigerian Food",
    options: [
      "JollofRice",
      "FriedRice",
      "EgusiSoup",
      "Ogbono",
      "OkroSoup",
      "MoiMoi",
      "Akara",
      "Suya",
      "Fufu",
      "PoundedYam",
      "EfoRiro",
      "OfadaRice",
      "PepperSoup",
      "BangaSoup",
      "Tuwo",
      "AfangSoup",
      "Nkwobi",
      "Ukwa",
      "Amala",
      "Eba",
      "YamPorridge",
      "Beans",
      "Plantain",
      "Ogiri",
      "OhaSoup",
    ],
  },
  {
    categoryName: "Mortal Kombat Characters",
    options: [
      "Scorpion",
      "SubZero",
      "LiuKang",
      "Raiden",
      "JohnnyCage",
      "Sonya",
      "Jax",
      "Kitana",
      "Mileena",
      "ShaoKahn",
      "ShangTsung",
      "KungLao",
      "NoobSaibot",
      "Smoke",
      "Kabal",
      "Sindel",
      "Baraka",
      "Reptile",
      "Ermac",
      "Kano",
      "Goro",
      "CassieCage",
      "Kenshi",
      "Tanya",
      "JacquiBriggs",
    ],
  },
  {
    categoryName: "Popular Board Games",
    options: [
      "Chess",
      "Checkers",
      "Scrabble",
      "Monopoly",
      "Risk",
      "Clue",
      "CandyLand",
      "Catan",
      "Ludo",
      "SnakesAndLadders",
      "Battleship",
      "Uno",
      "Pictionary",
      "ConnectFour",
      "Sorry",
      "Sequence",
      "Jenga",
      "Carrom",
      "Othello",
      "Trouble",
      "Backgammon",
      "GuessWho",
      "Yahtzee",
      "Blokus",
      "Twister",
    ],
  },
  {
    categoryName: "Books of the Bible",
    options: [
      "Genesis",
      "Exodus",
      "Leviticus",
      "Numbers",
      "Deuteronomy",
      "Joshua",
      "Judges",
      "Ruth",
      "Samuel",
      "Kings",
      "Chronicles",
      "Ezra",
      "Nehemiah",
      "Esther",
      "Job",
      "Psalms",
      "Proverbs",
      "Ecclesiastes",
      "SongOfSongs",
      "Isaiah",
      "Jeremiah",
      "Lamentations",
      "Ezekiel",
      "Daniel",
      "Hosea",
    ],
  },
  {
    categoryName: "Nigerian States",
    options: [
      "Lagos",
      "Kano",
      "Kaduna",
      "Rivers",
      "Oyo",
      "Benue",
      "Anambra",
      "Enugu",
      "Imo",
      "Abia",
      "Borno",
      "Plateau",
      "Niger",
      "Ekiti",
      "Ondo",
      "Edo",
      "Delta",
      "Kogi",
      "Kwara",
      "Bayelsa",
      "Sokoto",
      "Zamfara",
      "Gombe",
      "Taraba",
      "Yobe",
    ],
  },
  {
    categoryName: "Popular Digital Games",
    options: [
      "Fortnite",
      "Minecraft",
      "Roblox",
      "PUBG",
      "FreeFire",
      "CODMobile",
      "AmongUs",
      "ClashOfClans",
      "ApexLegends",
      "Valorant",
      "GenshinImpact",
      "FIFA",
      "PES",
      "LeagueOfLegends",
      "Overwatch",
      "Dota",
      "SubwaySurfers",
      "CandyCrush",
      "MobileLegends",
      "BrawlStars",
      "TempleRun",
      "Zelda",
      "MarioKart",
      "Halo",
      "Warzone",
    ],
  },
  {
    categoryName: "Ancient Civilizations",
    options: [
      "Egyptian",
      "Greek",
      "Roman",
      "Mayan",
      "Aztec",
      "Inca",
      "Babylonian",
      "Persian",
      "Chinese",
      "IndusValley",
      "Mesopotamian",
      "Hittite",
      "Nubian",
      "Phoenician",
      "Sumerian",
      "Celtic",
      "Viking",
      "Etruscan",
      "Byzantine",
      "Assyrian",
      "Minoan",
      "Hebrew",
      "Olmec",
      "GhanaEmpire",
      "MaliEmpire",
    ],
  },
  {
    categoryName: "Fairytales",
    options: [
      "Cinderella",
      "SnowWhite",
      "SleepingBeauty",
      "Rapunzel",
      "HanselAndGretel",
      "LittleMermaid",
      "BeautyAndTheBeast",
      "Aladdin",
      "Pinocchio",
      "Rumpelstiltskin",
      "JackAndTheBeanstalk",
      "RedRidingHood",
      "ThreeLittlePigs",
      "Goldilocks",
      "PiedPiper",
      "UglyDuckling",
      "Thumbelina",
      "FrogPrince",
      "Bluebeard",
      "BremenMusicians",
      "PrincessAndThePea",
      "TwelveDancingPrincesses",
      "GooseGirl",
      "SnowQueen",
      "BraveLittleTailor",
    ],
  },
  {
    categoryName: "Popular People in the Bible",
    options: [
      "Moses",
      "David",
      "Solomon",
      "Abraham",
      "Isaac",
      "Jacob",
      "Joseph",
      "Noah",
      "Peter",
      "Paul",
      "Jesus",
      "John",
      "Mary",
      "Ruth",
      "Esther",
      "Samuel",
      "Elijah",
      "Elisha",
      "Saul",
      "Joshua",
      "Isaiah",
      "Jeremiah",
      "Ezekiel",
      "Daniel",
      "Deborah",
    ],
  },
  {
    categoryName: "Popular Cities in the World",
    options: [
      "NewYork",
      "London",
      "Paris",
      "Tokyo",
      "Dubai",
      "Lagos",
      "Cairo",
      "Mumbai",
      "Shanghai",
      "Istanbul",
      "Rome",
      "LosAngeles",
      "Chicago",
      "Barcelona",
      "Berlin",
      "Moscow",
      "Seoul",
      "Toronto",
      "Bangkok",
      "Sydney",
      "Beijing",
      "Johannesburg",
      "Singapore",
      "Rio",
      "Amsterdam",
    ],
  },
  {
    categoryName: "Subjects",
    options: [
      "Mathematics",
      "English",
      "Biology",
      "Physics",
      "Chemistry",
      "Geography",
      "Economics",
      "Government",
      "Literature",
      "CivicEducation",
      "History",
      "Agriculture",
      "ComputerScience",
      "FineArt",
      "Commerce",
      "Accounting",
      "Music",
      "PhysicalEducation",
      "HealthScience",
      "SocialStudies",
      "Technology",
      "French",
      "Spanish",
      "BusinessStudies",
      "ReligiousStudies",
    ],
  },
  {
    categoryName: "Parts of the body",
    options: [
      "Head",
      "Eyes",
      "Ears",
      "Nose",
      "Mouth",
      "Neck",
      "Shoulder",
      "Chest",
      "Arm",
      "Hand",
      "Fingers",
      "Stomach",
      "Leg",
      "Thigh",
      "Knee",
      "Ankle",
      "Foot",
      "Toes",
      "Back",
      "Heart",
      "Lungs",
      "Liver",
      "Kidney",
      "Brain",
      "Hair",
    ],
  },
  {
    categoryName: "Popular Fictional characters",
    options: [
      "Batman",
      "Superman",
      "Spiderman",
      "IronMan",
      "Hulk",
      "Thor",
      "CaptainAmerica",
      "WonderWoman",
      "HarryPotter",
      "Hermione",
      "Dumbledore",
      "Voldemort",
      "Frodo",
      "Gandalf",
      "Legolas",
      "SherlockHolmes",
      "DrWatson",
      "Katniss",
      "Peeta",
      "Deadpool",
      "Joker",
      "HarleyQuinn",
      "Elsa",
      "Anna",
      "Olaf",
    ],
  },
];

const scrambleWord = (word: string): string => {
  const arr = word.toUpperCase().split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
};

// const getRandomIndex = (length: number): number => {
//   return Math.floor(Math.random() * length);
// };

const playSuccessSound = () => {
  const audio = new Audio(
    "https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg"
  );
  audio.play();
};

const WordScrambleGame: React.FC = () => {
  const [screen, setScreen] = useState("category");
  const [selectedCategory, setSelectedCategory] =
    useState<categoryWordsType | null>(null);
  const [gameMode, setGameMode] = useState<"speedrun" | "teamcount" | null>(
    null
  );
  const [questionInterval, setQuestionInterval] = useState(5);
  const [questionLimit, setQuestionLimit] = useState(5);
  const [questions, setQuestions] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrambledWord, setScrambledWord] = useState("");
  const [teams, setTeams] = useState<{ name: string; score: number }[]>([]);
  const [countdown, setCountdown] = useState(questionInterval);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedCategory) {
      const words = [...selectedCategory.options];
      const shuffled = words
        .sort(() => 0.5 - Math.random())
        .slice(0, questionLimit);
      setQuestions(shuffled);
    }
  }, [selectedCategory, questionLimit]);

  useEffect(() => {
    if (questions.length > 0 && currentIndex < questions.length) {
      setScrambledWord(scrambleWord(questions[currentIndex]));
      setCountdown(questionInterval);
    }
  }, [currentIndex, questions]);

  useEffect(() => {
    if (screen === "game-speedrun" && countdown > 0) {
      countdownRef.current = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
  }, [countdown, screen]);

  const startGame = () => {
    if (gameMode === "speedrun") {
      setScreen("game-speedrun");
      setCountdown(questionInterval);
      let index = 0;
      intervalRef.current = setInterval(() => {
        index++;
        if (index < questionLimit) {
          setCurrentIndex(index);
          setCountdown(questionInterval);
        } else {
          clearInterval(intervalRef.current!);
          setTimeout(() => {
            resetGame();
          }, 1000);
        }
      }, questionInterval * 1000);
    } else {
      setScreen("game-teamcount");
    }
  };

  const resetGame = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (countdownRef.current) clearTimeout(countdownRef.current);
    setScreen("category");
    setGameMode(null);
    setSelectedCategory(null);
    setCurrentIndex(0);
    setTeams([]);
  };

  const handleTeamClick = (index: number) => {
    playSuccessSound();
    const updatedTeams = [...teams];
    updatedTeams[index].score++;
    setTeams(updatedTeams);
    if (currentIndex + 1 < questionLimit) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setScreen("summary");
    }
  };

  return (
    <div className="p-4 max-w-md [@media(orientation:landscape)]:max-w-xl mx-auto text-center">
      {screen === "category" && (
        <>
          <h1 className="text-xl font-bold mb-4">Select Category</h1>
          <div className="grid grid-cols-3 gap-2">
            {categoryWords.map((cat, idx) => (
              <button
                key={idx}
                className="block w-full bg-blue-500 text-white rounded p-2 mb-2"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.categoryName}
              </button>
            ))}
          </div>

          {selectedCategory && (
            <>
              <p className="mt-2">Selected: {selectedCategory.categoryName}</p>
              <button
                className="mt-4 bg-green-500 text-white rounded p-2"
                onClick={() => setScreen("mode")}
              >
                Next
              </button>
            </>
          )}
        </>
      )}

      {screen === "mode" && (
        <>
          <h2 className="text-xl font-bold mb-2">Select Game Mode</h2>
          <button
            className="bg-purple-500 text-white p-2 rounded mb-2 w-full"
            onClick={() => setGameMode("speedrun")}
          >
            Speedrun
          </button>
          <button
            className="bg-purple-500 text-white p-2 rounded mb-2 w-full"
            onClick={() => setGameMode("teamcount")}
          >
            Team Count
          </button>

          {gameMode === "speedrun" && (
            <>
              <p className="mt-2">Interval (seconds):</p>
              <button
                className="bg-gray-200 px-4 py-2 rounded mb-2"
                onClick={() => {
                  const input = prompt("Enter interval in seconds:");
                  if (input) setQuestionInterval(Number(input));
                }}
              >
                {questionInterval} sec
              </button>
              <p>Number of Questions:</p>
              <button
                className="bg-gray-200 px-4 py-2 rounded mb-4"
                onClick={() => {
                  const input = prompt("Enter number of questions (max 25):");
                  if (input)
                    setQuestionLimit(Math.min(Number(input), MAX_QUESTIONS));
                }}
              >
                {questionLimit}
              </button>
            </>
          )}

          {gameMode === "teamcount" && (
            <>
              <p>Number of Questions:</p>
              <button
                className="bg-gray-200 px-4 py-2 rounded mb-2"
                onClick={() => {
                  const input = prompt("Enter number of questions (max 25):");
                  if (input)
                    setQuestionLimit(Math.min(Number(input), MAX_QUESTIONS));
                }}
              >
                {questionLimit}
              </button>
              <p>Number of Teams (max 4):</p>
              <button
                className="bg-gray-200 px-4 py-2 rounded mb-2"
                onClick={() => {
                  const input = prompt("Enter number of teams (max 4):");
                  const num = Math.min(Number(input), MAX_TEAMS);
                  const enteredTeams = [];
                  for (let i = 0; i < num; i++) {
                    const name =
                      prompt(`Enter name for Team ${i + 1}`) || `Team ${i + 1}`;
                    enteredTeams.push({ name, score: 0 });
                  }
                  setTeams(enteredTeams);
                }}
              >
                {teams.length} teams
              </button>
            </>
          )}

          <button
            className="bg-green-500 text-white p-2 rounded w-full mt-4"
            onClick={startGame}
          >
            Start Game
          </button>
        </>
      )}

      {screen === "game-speedrun" && (
        <div className="">
          <p className="text-[16px] font-light">
            Category - {selectedCategory?.categoryName}
          </p>
          <h2 className="text-xl font-bold mb-4">
            Question {currentIndex + 1} of {questionLimit}
          </h2>
          <div className="flex flex-col items-center h-[80vh] justify-center">
            <p className="text-5xl font-bold uppercase">{scrambledWord}</p>
            <p className="mt-4 text-sm animate-pulse">Next in: {countdown}s</p>
          </div>
        </div>
      )}

      {screen === "game-teamcount" && (
        <div className="flex flex-col items-center justify-between h-screen pb-8">
          <p className="text-[16px] font-light">
            Category - {selectedCategory?.categoryName}
          </p>

          <div className="mb-4 flex-1 items-center flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-4">
              Question {currentIndex + 1} of {questionLimit}
            </h2>
            <p className="text-5xl font-bold uppercase">{scrambledWord}</p>
          </div>

          <div className={`grid gap-2 grid-cols-${teams.length}`}>
            {teams.map((team, idx) => (
              <button
                key={idx}
                onClick={() => handleTeamClick(idx)}
                className="bg-yellow-500 text-white p-2 rounded"
              >
                {team.name} - {team.score}
              </button>
            ))}
          </div>
        </div>
      )}

      {screen === "summary" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Game Summary</h2>
          <p>Total Questions: {questionLimit}</p>
          {teams.map((team, idx) => (
            <p key={idx}>
              {team.name}: {team.score}
            </p>
          ))}
          <button
            onClick={resetGame}
            className="mt-4 bg-blue-500 text-white p-2 rounded"
          >
            Restart Game
          </button>
        </div>
      )}

      {screen !== "category" && (
        <button onClick={resetGame} className="absolute top-4 left-4 underline">
          Back
        </button>
      )}

      {screen === "category" && (
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 underline"
        >
          Back
        </button>
      )}
    </div>
  );
};

export default WordScrambleGame;
