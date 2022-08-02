import "../stylesheets/LoginPage.css"
import LoginForm from "./LoginForm";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function LoginPage() {
    return (
        <div>
            <Tabs
                defaultActiveKey="profile"
                id="fill-tab-example"
                className="mb-2"
                fill
            >
                <Tab eventKey="login" title="Login">
                    <LoginForm/>
                </Tab>
                <Tab eventKey="register" title="Register">
                </Tab>
            </Tabs>
        </div>
    )
}

export default LoginPage