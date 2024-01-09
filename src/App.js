import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./components/home-page/HomePage";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="main-page">
      <Header />
      <HomePage />
      {/* <Resume /> */}
    </div>
  );
}

export default App;
