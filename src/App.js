import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShortTextField from "./components/ShortTextField/ShortTextField";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShortTextField />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
