import React, { useState } from "react";
import axios from 'axios';

export default function LoginForm()
{
    const [userLogin, setUserLogin] = useState(new UserLogin());
    const [contacts, setContacts] = useState([[],]);
    // const login = () => { }
    const login = function (e) {
        e.preventDefault();
        // fetch https://localhost:52187/api/authentication { "username" : "", "password": "" }
        // axios to login
        axios({
            url: "https://localhost:52187/api/authentication",
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                // Add any auth token here
                /*authorization: "your token comes here",*/
                
            },
            data: JSON.stringify({ Username: userLogin.username, Password: userLogin.password }) 
        })
            .then((res) =>
            {
                console.log("We just logged in!!!");
                console.log(res.token);
                axios(
                    {
                        url: "https://localhost/api/contacts",
                        method: "GET",
                        headers: {
                            Bearer: 'CfDJ8CqlsGiy7KhKus4mG1Xt1zP_YSG7skJVfFQztDND-JxhJSxNSO1DZY7Diw_MXUrhY7_l_8iIB2cwMlXf7zvIhHaHyxXoenUvkq6Kr5hh6eu_ltMj9e4rMz-8eyOTrOmm3k5fpRTdpzaUAlX03wORKh3eTTmR0aneT1QvxTBuUAjvuJnDukAVZ-1rBr5heCTHb8XY8x3EQapol2aXCow26K41zatVTZoveekoF6dU-SziOTvAOyZ6Rvy2g5kurDymqdIg1NYu4Ldl0BYxDFrMCumd61gf6krrZOFc3dNg-4PAPlQ7B7FXeK0W9qkbfZvZKFjWSksRRupDTIDtuisL_o9HFZ2bd3xBVcW7C2q45xXOsljN9u0CT18Nxb4FFne-lMAKtPUSLxX4QnD9l8M3vLth-7r2iW_MSpKqKH5niuERHG09b8N__C4H8WthLeGcyW1i488fEqRbZFftDpgyv0-oP2qgAdgSHRNdP4Q2Awc5On6Ke8LXIxLJi9NMGLwmJmve3xFYhHr1zOwTdFA0S9NrHs9ZNC3BzPMEt5yItMLHA8WMt3f3NSfcSN8p2dymbuiDiOsqK2hyY4w8Qd5GES9BxL106w4hnOrMwdgv8TCAlIQcBqvhkPHD5gPvo4sKwPVMfNvFcbgTr2A3n2I4WLVRFMmiQuXnHToABSAd9iFf8o4pA74X2JkWy_aHg_DCI2BLfX7yTfywe5uEY2n_5Qc67zpuOkYixKk7OmWdQp_fFFDx5PC2dd0S3EdWW9VhLENrB-D-VyPp-Fbb0sNuFsFQlX-MgYbfKamiW1jq0h6sCiiBtugoZazRTpz753XV5Q'
                        }
                    }
                ).then((res) =>
                {
                    //console.log(res);
                });
            })
            .catch((err) => { console.log(err)});
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