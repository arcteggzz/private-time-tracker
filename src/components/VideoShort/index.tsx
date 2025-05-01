// ShortsPlayerApp.tsx - All-in-one Shorts Component
import { useEffect, useRef, useState } from "react";
import { shortsList } from "./shortsList"; // Import your list of shorts

const ShortsPlayerApp = () => {
  const generateShorts = (list: string[]) =>
    list.map((url, index) => ({
      videoId: `shorts-${index}`,
      url,
    }));

  const shorts = generateShorts(shortsList);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (direction: "prev" | "next") => {
    setCurrentIndex((prev) => {
      if (direction === "prev") return Math.max(prev - 1, 0);
      if (direction === "next") return Math.min(prev + 1, shorts.length - 1);
      return prev;
    });
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: currentIndex * (window.innerHeight * 0.85),
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: currentIndex * (window.innerHeight * 0.85),
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Top Banner */}
      <div className="h-[10vh] w-full bg-gray-800 text-white flex items-center justify-center fixed top-0 z-10">
        <h1 className="text-xl font-semibold">Shorts Viewer</h1>
      </div>

      {/* Video Player Scrollable Section */}
      <div
        ref={containerRef}
        className="absolute top-[10vh] bottom-[5vh] w-full overflow-hidden"
      >
        <div
          style={{ height: `${shorts.length * 85}vh` }}
          className="transition-transform duration-500 ease-in-out"
        >
          {shorts.map((short) => (
            <div
              key={short.videoId}
              className="h-[85vh] flex items-center justify-center py-[1.25vh]"
              style={{ transform: `translateY(-${currentIndex * 85}vh)` }}
            >
              <video
                src={short.url}
                className="max-h-full max-w-full w-[90vw] md:w-[480px] object-contain rounded-lg shadow-lg"
                autoPlay
                muted
                loop
                playsInline
                controls={true}
              />
              {/* Desktop Navigation Buttons */}
              <div className="hidden md:flex flex-col gap-2 absolute right-4 bottom-8 z-20">
                <button
                  className="bg-white/80 hover:bg-white text-black font-medium py-1 px-3 rounded shadow"
                  onClick={() => handleNavigation("prev")}
                >
                  Prev
                </button>
                <button
                  className="bg-white/80 hover:bg-white text-black font-medium py-1 px-3 rounded shadow"
                  onClick={() => handleNavigation("next")}
                >
                  Next
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="h-[5vh] w-full bg-gray-900 text-white flex items-center justify-center text-sm fixed bottom-0 z-10">
        <span>© 2025 Shorts Demo</span>
      </div>
    </div>
  );
};

export default ShortsPlayerApp;
