import { DataContextProvider } from "context/DataContext";
import { ThemeContextProvider } from "context/ThemeContext";

import MainLayout from "layouts/MainLayout";
import Home from "views/Home";

const App = () => {
  return (
    <DataContextProvider>
      <ThemeContextProvider>
        <MainLayout>
          <Home />
        </MainLayout>
      </ThemeContextProvider>
    </DataContextProvider>
  );
};

export default App;
