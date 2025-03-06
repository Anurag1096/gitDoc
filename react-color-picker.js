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
  const [isMouseDown, setIsMouseDown] = useState(false);
  const size = 15;
  const totalCells = size * size;
  // const mouseDrag=document.
  // handling the draw
  const handleCellAction = (e) => {
    if (isMouseDown) {
      e.target.style.backgroundColor = mode ? color : "";
    }
  };
  const handelDRaw = () => {
    setMode((prevMode) => (prevMode = true));
  };
  // handling the erase part
  const handelErase = () => {
    setMode((prevMode) => (prevMode = false));
  };
  // selection of color when clicking
  const handleColorChange = (hex) => {
    setMode(true);
    setColor((prev) => (prev = hex));
  };
  //selection the element and adding to it's color
  const handleClick = (e) => {
    e.target.style.backgroundColor = mode ? color : "";
  };

  return (
      <div>
        <div>{message}</div>
        <div>
          <div
              className="grid"
              onMouseDown={() => setIsMouseDown(true)}
              onMouseUp={() => setIsMouseDown(false)}
              onMouseLeave={() => setIsMouseDown(false)}
          >
            {Array.from({ length: totalCells }).map((_, index) => (
                <div
                    key={index}
                    className={`${index % 2 == 0 ? `cell` : `cell-even`} `}
                    onClick={(e, el) => handleClick(e)}
                    onMouseDown={(e) => handleCellAction(e)}
                    onMouseEnter={(e) => handleCellAction(e)}
                ></div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
              className={`${mode == true ? `active-tab` : `basic-tab`}`}
              onClick={handelDRaw}
              name="Draw"
          >
            Draw
          </div>
          <div
              className={`${mode == false ? `active-tab` : `basic-tab`}`}
              name="Erase"
              onClick={handelErase}
          >
            Erase
          </div>
        </div>
        <ul style={{ display: "flex" }}>
          {Object.entries(COLORS).map(([colorx, hex]) => (
              <li
                  style={{ border: `${color == hex ? `1px solid black` : ``}` }}
                  className="list-style"
                  key={colorx}
              >
            <span
                onClick={() => handleColorChange(hex)}
                style={{
                  color: hex,
                  backgroundColor: hex,
                  minWidth: "20px",
                  minheight: "20px",
                }}
            >
              dfs
            </span>
              </li>
          ))}
        </ul>
      </div>
  );
}
