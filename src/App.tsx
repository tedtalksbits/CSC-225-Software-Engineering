import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import { time } from "console";

function App() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  async function handleToggleDarkTheme() {
    const isDarkMode = await window.electron.theme.toggle();
    setTheme(isDarkMode ? "dark" : "light");
  }
  const handleClick = () => {
    alert("You clicked the button");
  };

  return (
    <div className="h-screen w-screen grid place-content-center gap-4">
      <Button onClick={handleToggleDarkTheme}>
        Switch to {theme === "dark" ? "🌞" : "🌙"} Mode
      </Button>
      <div className="container border p-8 rounded-md space-y-8">
        <h1>
          Todays Date: <Date></Date>
        </h1>
        <h1 className="text-center text-3xl font-bold ">Let's go boiz</h1>
        <Button onClick={handleClick}>Click the button for a suprise</Button>
      </div>
    </div>
  );
}

export default App;
