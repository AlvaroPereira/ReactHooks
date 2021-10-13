import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import MySettings from "./pages/my-settings";

export default () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route path="/my-settings">
            <MySettings/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}