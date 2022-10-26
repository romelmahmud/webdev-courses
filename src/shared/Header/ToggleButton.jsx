import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext/themeContext";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/outline";

const ToggleButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      {theme === "dark" ? (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <SunIcon className="h-6 w-6" />
        </button>
      ) : (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <MoonIcon className="h-6 w-6 " />
        </button>
      )}
    </>
  );
};

export default ToggleButton;
