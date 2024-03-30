import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Title from "./Components/Title/Title.mondule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
