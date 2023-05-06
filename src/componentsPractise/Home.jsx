import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";

export default function Home() {
  //   const navigate = useNavigate();
  return (
    <div className="containerHome">
      <div className="heading"> Welcome to React Tutorials</div>
      {/* <ul>
        <li onClick={() => navigate("/reactForm")}>React Form</li>
        <li onClick={() => navigate("/counter")}>Counter Form</li>
      </ul> */}
      <div className="links">
        <Link
          to="/reactForm"
          className="link"
          style={{ textDecoration: "none" }}
        >
          <p className="linkinline">React form</p>
        </Link>
        <br />
        <Link to="/Counter" className="link" style={{ textDecoration: "none" }}>
          <p className="linkinline">Counter App</p>
        </Link>
        <br />
        <Link
          to="/counterXstate"
          className="link"
          style={{ textDecoration: "none" }}
        >
          <p className="linkinline">Counter App(Xstate)</p>
        </Link>
        <br />
        <Link
          to="/counterXstateNew"
          className="link"
          style={{ textDecoration: "none" }}
        >
          <p className="linkinline">Counter App(Xstate New)</p>
        </Link>
        <br />
        <Link to="/todoApp" className="link" style={{ textDecoration: "none" }}>
          <p className="linkinline">Todo(Xstate)</p>
        </Link>
        <br />
        <Link
          to="/trafficLight"
          className="link"
          style={{ textDecoration: "none" }}
        >
          <p className="linkinline">Traffic Light(Xstate)</p>
        </Link>
        <br />
        <Link
          to="/TrafficTypescript"
          className="link"
          style={{ textDecoration: "none" }}
        >
          <p className="linkinline">Traffic Light Typescript(Xstate)</p>
        </Link>
      </div>
    </div>
  );
}
