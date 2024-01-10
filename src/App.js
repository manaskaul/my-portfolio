import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import HomePage from "./components/home-page/HomePage";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="main-page">
      <NavBar />
      <HomePage />
      {/* <Resume /> */}
    </div>
  );
}

export default App;
