import "./App.css";
import { ContentPage } from "./components/ContentPage/ContentPage";
import Navbar from "./components/NavBar/Navbar";
import { Sidebar } from "./components/SideBar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StockDetails from "./components/StockDetails/StockDetails";

function App() {
  return (
    <Router>
      <div className="mainPage">
        <Navbar />
        <div className="midPage">
          <Sidebar />
          <Routes>
            {/* Route for the main content page */}
            <Route path="/" element={<ContentPage />} />

            {/* Route for stock details page */}
            <Route path="/stock/:symbol" element={<StockDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
