import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CounterApp from "./componentsPractise/CounterApp";
import Home from "./componentsPractise/Home";
import ReactForm from "./componentsPractise/ReactForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reactForm" element={<ReactForm />} />
          <Route path="/counter" element={<CounterApp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
