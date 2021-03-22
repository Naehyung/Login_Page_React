import "./App.css";
import Login from "./pages/Login/Login";
import Account from "./pages/Account/Account"
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Login} />
        <Route path="/account" component={Account} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
