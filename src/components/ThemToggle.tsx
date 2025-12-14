import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import cn from "./lib/utils.ts";
function ThemToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

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
    <button
      onClick={toggleThem}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300 cursor-pointer" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900 cursor-pointer" />
      )}
    </button>
  );
}

export default ThemToggle;
