import React from "react";
import axios from 'axios';
///import { useHistory } from 'react-router-dom';
function Login() {
    const APILINK = "http://localhost:8080/login";
    const cover = 'https://wallpapercave.com/wp/wp5718375.jpg';
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    //const history = useHistory();
    async function sendData() {
        try {
            const response = await axios.post(APILINK, { email: email, password: password }, {headers: { 'Content-Type': 'application/json'}});
            console.log(response.data["access-token"]);
            localStorage.setItem('jwttoken',response.data['access-token']);
            //history.push('/');
            //localStorage.setItem('jwtoken',response.data);
            // Handle success, such as setting tokens, redirecting, etc.
        } catch (error) {
            console.error(error);
            // Handle error, display error message, etc.
        }
    }
    return (
        <>
            <div className="login-container">
                <img src={cover} className='bg-image' alt="Bg Image" />
                <div className="login-container-content">
                    <div className='login-forms'>
                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value={email} onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                        </div>
                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" value={password} onChange={(e) => {
                                setPassword(e.target.value);
                            }} />
                        </div>
                    </div>
                    <button className="login-submit-button" onClick={(e) => {
                        e.preventDefault();
                        sendData();
                    }} >Sign in</button>
                </div>
            </div>
        </>
    );
}
export default Login;