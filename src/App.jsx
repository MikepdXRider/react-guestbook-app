import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home.jsx";
import Layout from "./views/Layout/Layout.jsx";
import Login from "./views/Auth/Login.jsx";

// 
// ✔ Install and Import react router
// ✔ Implement router switch with appropriate routes. 
// Create and import a private route component.
// Wrap appropriate components in private route component.
// 

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {/* This should be a protected/private route */}
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
