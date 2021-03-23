import "./App.css";
import Login from "./pages/Login/Login";
import Account from "./pages/Account/Account";
import Password from "./pages/Password/Password";
import Chat from "./pages/Chat/Chat"
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Login} />
        <Route path="/account" component={Account} />
        <Route path="/password" component={Password} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
