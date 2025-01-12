import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";



const Navbar = () => {
  const { theme, dispatch } = useContext(ThemeContext);

  const handleTheme = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  return (
    <nav
      className={
        theme
          ? "bg-gray-900 py-3 px-10 flex items-center justify-between"
          : "bg-indigo-500 md:bg-indigo-800 py-3 px-10 flex items-center justify-between"
      }
    >
      <h1 className="text-white text-lg font-black uppercase">Tailwind App</h1>
      <button
        onClick={handleTheme}
        className={
          theme
            ? "bg-gray-400 px-2 py-1 rounded-md text-black font-bold hover:bg-lime-600 text-sm"
            : "bg-lime-400 px-2 py-1 rounded-md text-black font-bold hover:bg-lime-600 text-sm"
        }
      >
        {theme ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
