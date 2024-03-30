import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobDescription from "./Components/JobDescription/JobDescription.module";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobDescription />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
