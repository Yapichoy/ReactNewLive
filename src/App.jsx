import './App.sass';
import {Route} from "react-router-dom";
import Main from "./pages/Main/Main";

const App = () => {
  return (
    <div className="App">
        <div className={'roter-view'}>
            <Route path="/" render={() => <Main />}/>
        </div>
    </div>
  );
}

export default App;
