import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const videosData = [
  {
    id: 0,
    uuid: "a1",
    url: "https://res.cloudinary.com/dhf9w2zpm/video/upload/v1745581244/meme-shorts/fd61c0f5775b422aacfd68f3c266c27c_wvlf63.mp4",
  },
  {
    id: 1,
    uuid: "b2",
    url: "https://res.cloudinary.com/dhf9w2zpm/video/upload/v1745581244/meme-shorts/f1604780c8534416a634d319b6665ba4_cg2cbg.mp4",
  },
  {
    id: 2,
    uuid: "c3",
    url: "https://res.cloudinary.com/dhf9w2zpm/video/upload/v1745581243/meme-shorts/ef96b5e45fa942969a468f5f68c716d7_cpm2wf.mp4",
  },
  {
    id: 3,
    uuid: "d4",
    url: "https://res.cloudinary.com/dhf9w2zpm/video/upload/v1745581243/meme-shorts/e7240a6aba1d4f0dae162730ceb1c197_tvgluw.mp4",
  },
  {
    id: 4,
    uuid: "e5",
    url: "https://res.cloudinary.com/dhf9w2zpm/video/upload/v1745581240/meme-shorts/e1141a22a7914cb8bede06678cd1434d_jimzwr.mp4",
  },
];

export default function ReelsPlayer() {
  const { videoId } = useParams();
  const navigate = useNavigate();

  const [currentVideo, setCurrentVideo] = useState<
    (typeof videosData)[0] | null
  >(null);
  const [isMuted, setIsMuted] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoIndex = useMemo(
    () => videosData.findIndex((video) => video.uuid === videoId),
    [videoId]
  );

  useEffect(() => {
    if (videoIndex >= 0) {
      setCurrentVideo(videosData[videoIndex]);
    } else {
      setCurrentVideo(null);
    }
  }, [videoIndex]);

  useEffect(() => {
    if (videoRef.current && videoRef.current.play) {
      videoRef.current.pause();
      videoRef.current.load();
      videoRef.current.play().catch(() => {}); // ignore autoplay issues
    }
  }, [currentVideo]);

  useEffect(() => {
    const vidEl = videoRef.current;
    if (vidEl && currentVideo) {
      vidEl.src = currentVideo.url;
      vidEl.play().catch(() => {});
    }
  }, [currentVideo]);

  const goToVideo = (id: number) => {
    const video = videosData.find((v) => v.id === id);
    if (video) {
      navigate(`/v2/app_5/${video.uuid}`);
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="h-screen w-full flex flex-col">
      {/* Navbar */}
      <nav className="h-[8vh] bg-white flex justify-between items-center px-4 backdrop-blur-[40px] shadow-sm shadow-gray-100">
        {/* <img src="/logo.svg" alt="fusion-icon" /> */}
        {/* <img src="/logo-icon.svg" alt="fusion-icon" /> */}
        <div className="flex items-center gap-28">
          <Link to={"/"} className="flex items-center cursor-pointer">
            <img src="/logo-dark-2.svg" alt="fusion-icon" />
            {/* <h1 className="text-2xl font-bold bg-gradient-to-r from-[#FFB205] to-[#4C006B] bg-clip-text text-transparent">
              reels
            </h1> */}
            <h1 className="text-2xl font-bold text-[#FFB205]">reels</h1>
          </Link>

          <div className="flex items-center gap-8">
            <p className="text-gray-brand12 hover:text-gray-brand12/80 cursor-pointer">
              WebApp
            </p>
            <p className="text-gray-brand12 hover:text-gray-brand12/80 cursor-pointer">
              Explore Events
            </p>
          </div>
        </div>

        <button className="border-none h-10 text-white font-normal text-center text-sm px-8 rounded-lg bg-gradient-to-r from-[#ff9d00] to-[#9d4edd] cursor-pointer">
          Become a Creator
        </button>
      </nav>

      {/* Main Content */}
      <main className="h-[92vh] py-3 px-4 flex items-center justify-center gap-4 overflow-hidden">
        {/* Previous Button */}
        {videoIndex > 0 && (
          <button
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 cursor-pointer"
            onClick={() => goToVideo(videoIndex - 1)}
          >
            {`<`}
          </button>
        )}

        {/* Video Player Container */}
        <div className="w-[420px] h-full rounded-md bg-black flex items-center justify-center">
          {currentVideo ? (
            <>
              <video
                ref={(el) => {
                  videoRef.current = el;
                }}
                src={currentVideo.url}
                className="w-full h-full object-contain rounded-md"
                controls
                muted={isMuted} // control manually
                autoPlay
                loop
              />
            </>
          ) : (
            <div className="text-white text-center p-4">
              <p>Invalid video selected. Please try another.</p>
            </div>
          )}
        </div>

        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 bg-gray-300 text-black rounded-full px-2 py-1 text-sm shadow cursor-pointer"
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>

        {/* Next Button */}
        {videoIndex < videosData.length - 1 && (
          <button
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 cursor-pointer"
            onClick={() => goToVideo(videoIndex + 1)}
          >
            {`>`}
          </button>
        )}
      </main>
    </div>
  );
}
