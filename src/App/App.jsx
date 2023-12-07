import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Carousel from "../components/Carousel/Carousel";
import Homepage from "../components/Homepage/Homepage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/memories" element={<Carousel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
