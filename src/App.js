import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Tasks from "./features/tasks";
import Author from "./features/author";
import { Navigation } from "./common/Navigation";
import TaskDetails from "./features/tasks/TaskDetails";

const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path="/zadania/:id">
        <TaskDetails />
      </Route>
      <Route path="/zadania">
        <Tasks />
      </Route>
      <Route path="/autor">
        <Author />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
