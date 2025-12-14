import { Moon, Sun } from "lucide-react";
import { useState } from "react";
function ThemToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleThem = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };
  return (
    <button onClick={toggleThem}>
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300 cursor-pointer" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900 cursor-pointer" />
      )}
    </button>
  );
}

export default ThemToggle;
