import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CounterApp from "./componentsPractise/CounterApp";
import Home from "./componentsPractise/Home";
import ReactForm from "./componentsPractise/ReactForm";
import CounterAppXstate from "./componentsPractise/CounterAppXstate";
import CounterAppXstateNew from "./componentsPractise/XstatePractise/Counter App/CounterAppXstateNew";
import TodoApp from "./componentsPractise/XstatePractise/TodoApp";
import TrafficLight from "./componentsPractise/XstatePractise/TrafficLight";
import TrafficLightTypeScript from "./componentsPractise/TrafficLightTyprScript/TrafficLightTypeScript";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reactForm" element={<ReactForm />} />
          <Route path="/counter" element={<CounterApp />} />
          <Route path="/counterXstate" element={<CounterAppXstate />} />
          <Route path="/counterXstateNew" element={<CounterAppXstateNew />} />
          <Route path="/todoApp" element={<TodoApp />} />
          <Route path="/trafficLight" element={<TrafficLight />} />
          <Route path="/TrafficTypescript" element={<TrafficLightTypeScript />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
