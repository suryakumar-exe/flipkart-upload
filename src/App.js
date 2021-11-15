import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Displayproduct from './Components/Displayproduct';
import Home from './Components/Home';
import Orderproduct from './Components/Orderproduct';
import Updateproduct from './Components/Updateproduct';

function App() {
  return (
    <div styles={{ backgroundColor:"blue"}}>
    <Router>
    <div className="App">
      <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/back"  component={Home}/>
       <Route path="/order"  component={Orderproduct}/>
       <Route path="/display"  component={Displayproduct}/>
       <Route path="/update/:id"  component={Updateproduct}/>
     </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
