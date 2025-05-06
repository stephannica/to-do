import { ThemeProvider } from "@/components/Header/DarkMode/theme-provider";
import Header from "./components/Header";
import Title from "./components/Title";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Title />
    </ThemeProvider>
  );
}

export default App;
