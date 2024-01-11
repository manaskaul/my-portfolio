import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home-page/HomePage";
import NavBar from "./components/nav-bar/NavBar";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="main-page">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="*" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
