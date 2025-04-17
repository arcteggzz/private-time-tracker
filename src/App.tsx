import { Route, Routes, useLocation } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import ButtonWithModal from "./components/ButtonWithModal";
import DistanceWalkedTracker from "./components/DistanceWalkedTracker";

function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<NavMenu />} />
        <Route path={"v2/app_1"} element={<ButtonWithModal />} />
        <Route path={"v2/app_2"} element={<DistanceWalkedTracker />} />
      </Routes>
    </>
  );
}

export default App;
