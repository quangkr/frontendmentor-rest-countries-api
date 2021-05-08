import { DataContextProvider } from "context/DataContext";
import { ThemeContextProvider } from "context/ThemeContext";

const App = () => {
  return (
    <DataContextProvider>
      <ThemeContextProvider>
        <div id="app">React app</div>
      </ThemeContextProvider>
    </DataContextProvider>
  );
};

export default App;
