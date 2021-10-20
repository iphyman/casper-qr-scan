import { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";
import Transfer from "pages/Transfer";
import Delegate from "pages/Delegate";
import Undelegate from "pages/Undelegate";

export default class Routes extends PureComponent {
  render() {
    return (
      <>
        <Switch>
          <Route strict exact path="/" component={Transfer} />
          <Route
            strict
            exact
            path="/transfer/:operation?"
            component={Transfer}
          />
          <Route
            strict
            exact
            path="/delegate/:operation?"
            component={Delegate}
          />
          <Route
            strict
            exact
            path="/undelegate/:operation?"
            component={Undelegate}
          />
        </Switch>
      </>
    );
  }
}
