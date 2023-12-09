import "./globalHeader.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function GlobalHeader() {
  const navs = [
    { name: "Home", url: "/dashboard" },
    { name: "Gift", url: "/gift" },
    { name: "Order", url: "/orders" },
    { name: "Store", url: "/store" },
  ];
  const [isActive, setIsActive] = useState(0);

  const navigateTo = useNavigate();

  function handleClick(index, data) {
    setIsActive(index);
    console.log(data);
  }

  return (
    <header className="App-header">
      <div>
        <ul className="leftMenu">
          <li className="listItem">
            <img
              src="https://www.starbucks.in/assets/icon/logo.png"
              onClick={() => {
                navigateTo("/dashboard");
              }}
            />
          </li>
          {navs.map((nav, index) => (
            <li
              key={index}
              className={isActive === index ? "activeList" : "inActiveList"}
              onClick={() => handleClick(index, nav)}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to={`${nav?.url}`}
              >
                {nav?.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="rightMenu">
        <div
          style={{
            display: "flex",
          }}
        >
          <img
            src="https://www.starbucks.in/assets/icon/search.svg"
            style={{ position: "relative", left: 35 }}
          />
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
              boxShadow:
                "0 0 2px #00000012, 0 2px 2px #0000000f, 0 1px 3px #0000001a",
              borderRadius: 15,
            }}
          />
        </div>
        <h3>
          <img
            src="https://www.starbucks.in/assets/icon/account_thin.svg"
            onClick={() => {
              navigateTo("/login");
            }}
          />
        </h3>
      </div>
    </header>
  );
}
