import React, { useState } from "react";

export default function LoginForm()
{
    const [userLogin, setUserLogin] = useState(new UserLogin());
    const [contacts, setContacts] = useState([[],]);
    // const login = () => { }
    const login = function (e) {
        // fetch https://localhost:52187/api/authentication { "username" : "", "password": "" }
    }

    const usernameChange = (e) =>
    {
        console.log(e.target.value);
        let newUserLogin = new UserLogin(e.target.value, userLogin.password);
        setUserLogin(newUserLogin);
    }

    const passwordChange = (e) =>
    {
        console.log(e.target.value);
        let newUserLogin = new UserLogin(userLogin.username, e.target.value);
        setUserLogin(newUserLogin);
    }

    return (
        <form>
            Username: <input type="text" name='username' value={userLogin.username} onChange={usernameChange} /><br />
            Password: <input type="password" name='password' value={userLogin.password} onChange={passwordChange} /><br />
            <button onClick={login}>Login</button>
            <div>{ contacts }</div>
        </form>
        );
}

function UserLogin(username = "admin@contoso.com", password = "Passw0rd!")
{
    this.username = username;
    this.password = password;
}