import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextBox from "./components/TextField";
import Weather from "./components/Weather";

function App() {
  return (
    <BrowserRouter>
      <TextBox />
      <Routes>
        <Route path="/weather/:id" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
