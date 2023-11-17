import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Info from "./Routes/Info";
import Plan from "./Routes/Plan";
import AddOn from "./Routes/AddOn";
import Summary from "./Routes/Summary";
import Step from "./Components/Step.component";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Step />
        <div className="form-container">
          <Routes>
            <Route path="/" element={<Info />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/addon" element={<AddOn />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
