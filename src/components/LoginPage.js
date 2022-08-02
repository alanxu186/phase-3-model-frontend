import "../stylesheets/LoginPage.css"
import LoginForm from "./LoginForm";
import CreateAccount from "./CreateAccount";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from "react";

function LoginPage() {
    const [login, isLoginIn] = useState(true)

    




    return (
        <div>
            <div>
                <button onClick={() => isLoginIn(true)}>LOGIN</button>
                <button onClick={() => isLoginIn(false)}>CREATE ACCOUNT</button>
            </div>

            <div id="login-form">
                {login ? <LoginForm /> : <CreateAccount />}
            </div>


        </div>
    )
}

export default LoginPage