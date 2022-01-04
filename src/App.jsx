import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home.jsx";
import Layout from "./views/Layout/Layout.jsx";
import Login from "./views/Auth/Login.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
// 
// ✔ Install and Import react router
// ✔ Implement router switch with appropriate routes. 
// ✔ Create and import a private route component.
// ✔ Wrap appropriate components in private route component.
// 

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <PrivateRoute exact path='/'>
            <Home />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
