import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Navigation } from "./common/Navigation";
import TasksPage from "./features/tasks/TasksPage";
import TaskDetailsPage from "./features/tasks/TaskDetailsPage";
import AuthorPage from "./features/author/index";

const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path="/zadania/:id">
        <TaskDetailsPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/autor">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;