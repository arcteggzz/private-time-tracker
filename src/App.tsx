import { Route, Routes, useLocation } from "react-router-dom";
import ButtonWithModal from "./components/ButtonWithModal";
import DistanceWalkedTracker from "./components/DistanceWalkedTracker";

function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<ButtonWithModal />} />
        <Route path={"/v2"} element={<DistanceWalkedTracker />} />
      </Routes>
    </>
  );
}

export default App;
