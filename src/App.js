import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Main from './Components/Main';
import About from './Components/About';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Service from './Components/Service';
import Contact from './Components/Contact';
function App() {
  return (

    <Router>
    <div className="App">
       
            <Switch>
              <Route exact path="/">
                  <NavBar/>
                  <Main/>
              </Route>
              <Route exact path="/service">
                  <NavBar/>
                  <Service></Service>
              </Route> 
              <Route exact path="/about" >
                  <NavBar/>
                  <About/>
              </Route>
              <Route exact path="/contact">
                  <NavBar/>
                  <Contact/>
              </Route> 
              <Route exact path="/login" >
                 <Login/> 
              </Route>
              <Route exact path="/signup" >
                <SignUp></SignUp>
              </Route>
            </Switch>
    </div>
    </Router>
   
  );
}

export default App;
