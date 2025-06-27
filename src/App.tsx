import { Route, Routes, useLocation } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import ButtonWithModal from "./components/ButtonWithModal";
import DistanceWalkedTracker from "./components/DistanceWalkedTracker";
import ImposterGame from "./components/ImposterGame";
import VideoShort from "./components/VideoShort";
import Reels from "./components/Reels";
import ListenUp from "./components/ListenUp";
import TangleText from "./components/TangleText";

function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<NavMenu />} />
        <Route path={"v2/app_1"} element={<ButtonWithModal />} />
        <Route path={"v2/app_2"} element={<DistanceWalkedTracker />} />
        <Route path={"v2/app_3"} element={<ImposterGame />} />
        <Route path={"v2/app_4"} element={<VideoShort />} />
        <Route path={"v2/app_5/:videoId"} element={<Reels />} />
        <Route path={"v2/app_6"} element={<ListenUp />} />
        <Route path={"v2/app_7"} element={<TangleText />} />
      </Routes>
    </>
  );
}

export default App;
