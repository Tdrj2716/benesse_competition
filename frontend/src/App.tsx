import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { pageLink } from "./constants/link";
import TimerPage from "./features/Timer/TimerPage";
import LoginPage from "./features/login/LoginPage";
import ClassSchedulePage from "./features/schedule/ClassSchedulePage";

function App() {
  return (
    <>
      {/* electronを使用する場合はHashRouterを使用することに注意 */}
      <BrowserRouter>
        <Routes>
          <Route path={pageLink.login} element={<LoginPage />} />
          <Route path={pageLink.schedule} element={<ClassSchedulePage />} />
          <Route path={pageLink.timer} element={<TimerPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
