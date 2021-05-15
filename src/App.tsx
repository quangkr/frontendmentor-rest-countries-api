import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DataContextProvider } from "context/DataContext";
import { ThemeContextProvider } from "context/ThemeContext";

import MainLayout from "layouts/MainLayout";
import Home from "views/Home";
import DetailPage from "views/DetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <ThemeContextProvider>
          <MainLayout>
            <Switch>
              <Route path="/detail/:id" children={<DetailPage />} />
              <Route path="/" children={<Home />} />
            </Switch>
          </MainLayout>
        </ThemeContextProvider>
      </DataContextProvider>
    </BrowserRouter>
  );
};

export default App;
