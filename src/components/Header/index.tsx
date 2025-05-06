import { useEffect, useState } from "react";
import dateAndHour from "../../utils/dateAndHour";
import { ModeToggle } from "./DarkMode/mode-toggle";

function Header() {
  const [date, setDate] = useState(dateAndHour());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dateAndHour());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex justify-around p-5 font-IBMPlexMono">
      <p>{date}</p>
      <ModeToggle/>
    </header>
  );
}

export default Header;
