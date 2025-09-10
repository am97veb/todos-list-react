import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import TasksPage from "../../features/tasks/TasksPage";
import TaskDetailsPage from "../../features/tasks/TaskDetailsPage";
import AuthorPage from "../../features/author/index";
import { toAuthor, toTaskDetails, toTasks } from "../routes";

const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toTaskDetails()}>
        <TaskDetailsPage />
      </Route>
      <Route path={toTasks()}>
        <TasksPage />
      </Route>
      <Route path={toAuthor()}>
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to={toTasks()} />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;