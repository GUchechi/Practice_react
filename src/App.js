import './App.css'
import Homepage from './Components/Pages/Homepage'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <Homepage/>
        </Route>
        <Route> </Route>
        <Route></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
