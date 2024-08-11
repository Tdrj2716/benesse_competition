import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { pageLink } from "./constants/link";
import LoginPage from "./features/login/page";
import ClassSchedulePage from "./features/schedule/page";

function App() {
  return (
    <>
      {/* electronを使用する場合はHashRouterを使用することに注意 */}
      <BrowserRouter>
        <Routes>
          <Route path={pageLink.login} element={<LoginPage />} />
          <Route path={pageLink.schedule} element={<ClassSchedulePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
