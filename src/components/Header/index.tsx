import { useEffect, useState } from "react";
import dateAndHour from "../../utils/dateAndHour";

function Header() {
  const [date, setDate] = useState(dateAndHour());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dateAndHour());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <p>{date}</p>
    </header>
  );
}

export default Header;
