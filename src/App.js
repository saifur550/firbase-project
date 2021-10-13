import { BrowserRouter ,Switch ,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import NotPage from './Pages/NotPage/NotPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route exact path = "/home">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotPage></NotPage>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
