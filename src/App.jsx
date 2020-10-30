import logo from './logo.svg';
import './App.css';
import Auth from "./pages/Auth/Auth";
import {Route} from "react-router-dom";
import Main from "./pages/Main/Main";

const App = () => {
  return (
    <div className="App">
        <div className={'roter-view'}>
            <Route path="/home" render={() => <Main />}/>
            <Route path="/auth/" render={() => <Auth />}/>
        </div>
    </div>
  );
}

export default App;
