import "./App.css";
import { ContentPage } from "./components/ContentPage/ContentPage";
import Navbar from "./components/NavBar/Navbar";
import { Sidebar } from "./components/SideBar/Sidebar";

function App() {
  return (
    <>
      <div className="mainPage">
        <Navbar />
        <div className="midPage">
          <Sidebar />
          <ContentPage />
        </div>
      </div>
    </>
  );
}

export default App;
