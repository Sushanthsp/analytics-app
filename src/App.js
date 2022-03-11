import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarLeft from "./components/SidebarLeft";
import Middlebar from "./components/Middlebar";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="app_body">
          <SidebarLeft />
          <Routes>
            <Route exact path="/" element={<Middlebar />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
