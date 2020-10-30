import style from "./Auth.module.css";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import {Route} from "react-router-dom";

const Auth = () => {
    return (
        <div className={style.auth}>
            <div className={'roter-view'}>
                <Route path="/auth/login" render={() => <Login />}/>
                <Route path="/auth/register" render={() => <Register />}/>
            </div>
        </div>
    );
}

export default Auth;
