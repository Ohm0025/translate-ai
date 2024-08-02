import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import ReadPage from "./components/readPage/ReadPage";
import useIndexText from "./components/stores/indexText";

function App() {
  const { indexText } = useIndexText();
  console.log(indexText);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/readPage/:indexText" element={<ReadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
