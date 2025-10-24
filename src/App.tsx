import { Route, Routes, useLocation } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import ButtonWithModal from "./components/ButtonWithModal";
import DistanceWalkedTracker from "./components/DistanceWalkedTracker";
import ImposterGame from "./components/ImposterGame";
import VideoShort from "./components/VideoShort";
import Reels from "./components/Reels";
import ListenUp from "./components/ListenUp";
import TangleText from "./components/TangleText";
import WalletCreationFlow from "./components/WalletCreationFlow";
import WalletManagementFlow from "./components/WalletManagementFlow";
import QRCodeViewer from "./components/QRCodeViewer";
import Encrypt from "./components/Encrypt";
import PostingHelper from "./components/PostingHelper";
// import ChartsPage from "./components/ChartsPage";

function App() {
  const location = useLocation();
  console.log("Current location:", location);

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
        <Route path={"v2/app_8"} element={<WalletCreationFlow />} />
        <Route path={"v2/app_9"} element={<WalletManagementFlow />} />
        <Route path={"v2/app_10"} element={<QRCodeViewer />} />
        <Route path={"v2/app_11"} element={<Encrypt />} />
        <Route path={"v2/app_12"} element={<PostingHelper />} />
        {/* <Route path={"v2/app_13"} element={<ChartsPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
