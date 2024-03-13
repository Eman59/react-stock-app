import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StockProvider } from "./contexts/StockContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <StockProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </StockProvider>
  );
};

export default App;
