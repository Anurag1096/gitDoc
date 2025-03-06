import { useState } from "react";

const COLORS = {
  white: "#fff",
  gray: "#e9ecef",
  black: "#000",
  red: "#cc0001",
  orange: "#fb940b",
  yellow: "#ffff01",
  green: "#01cc00",
  teal: "#38d9a9",
  blue: "#228be6",
  purple: "#7950f2",
  beige: "#ff8787",
};

export default function App() {
  const [message, setMessage] = useState("Hello World!");
  const [color, setColor] = useState("");
  const [mode, setMode] = useState(true);
  const size = 15;
  const totalCells = size * size;
  // handling the draw
  const handelDRaw = () => {
    setMode((prevMode) => (prevMode = true));
  };
  // handling the erase part
  const handelErase = () => {
    setMode((prevMode) => (prevMode = false));
  };
  // selection of color when clicking
  const handleColorChange = (hex) => {
    prevColor = hex;
    setColor((prev) => (prev = hex));
  };
  //selection the element and adding to it's color
  const handleClick = (e, index) => {
    if (mode) {
      e.target.style.backgroundColor = color;
    } else {
      e.target.style.backgroundColor = "";
    }
  };

  return (
    <div>
      <div>{message}</div>
      <div>
        <div className="grid">
          {Array.from({ length: totalCells }).map((_, index) => (
            <div
              key={index}
              className={`${index % 2 == 0 ? `cell` : `cell-even`} `}
              onClick={(e, el) => handleClick(e, index)}
            ></div>
          ))}
        </div>
      </div>
      <div>
        <div onClick={handelDRaw} name="Draw">
          Draw
        </div>
        <div name="Erase" onClick={handelErase}>
          Erase
        </div>
      </div>
      <ul>
        {Object.entries(COLORS).map(([color, hex]) => (
          <li key={color}>
            <span onClick={() => handleColorChange(hex)} style={{ color: hex }}>
              {color}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
