import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/Home/Home';
import TodoList from './pages/TodoList/TodoList';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todo-list" component={TodoList} />
      </Switch>
    </div>
  );
}

export default App;
