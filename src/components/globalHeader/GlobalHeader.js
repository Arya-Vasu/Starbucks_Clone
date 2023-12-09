import "./globalHeader.css";
import { useState } from "react";

export function GlobalHeader() {
  const navs = ["Home", "Gift", "Order", "Store"];
  const [isActive, setIsActive] = useState(0);

  function handleClick(index) {
    setIsActive(index);
    {
      console.log(index);
    }
  }

  return (
    <header className="App-header">
      <div>
        <ul className="leftMenu">
          <li className="listItem">
            <img src="https://www.starbucks.in/assets/icon/logo.png" />
          </li>
          {navs.map((nav, index) => (
            <li
              className={isActive === index ? "activeList" : "inActiveList"}
              onClick={() => handleClick(index)}
            >
              <a>{nav}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="rightMenu">
        <div
          style={{
            display: "flex"
          }}
        >
          <img src="https://www.starbucks.in/assets/icon/search.svg" style={{ position: "relative", left: 35 }} />
          <input
            type="text"
            placeholder="Looking for something specific?"
            style={{
              height: 30,
              width: 200,
              paddingLeft: 35,
              margin: 0,
              padding: "0 45px",
              border: 0,
              boxShadow: "0 0 2px #00000012, 0 2px 2px #0000000f, 0 1px 3px #0000001a",
              borderRadius: 15,
            }} />
        </div>
        <h3>
          <img src="https://www.starbucks.in/assets/icon/account_thin.svg" />
        </h3>
      </div>
    </header>
  );
}
