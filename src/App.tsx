import { ThemeContextProvider } from "./contexts/ThemeContext";
import { Routers } from "./routes";
import GlobalStyles from "./styles/global"

function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <Routers />
    </ThemeContextProvider>
  );
}

export default App;
