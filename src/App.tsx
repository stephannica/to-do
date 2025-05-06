import { ModeToggle } from "./components/Header/DarkMode/mode-toggle";
import Header from "./components/Header";
import { ThemeProvider } from "@/components/Header/DarkMode/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <ModeToggle />
    </ThemeProvider>
  );
}

export default App;
