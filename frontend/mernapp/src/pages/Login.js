import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from "../utils";
import "./auth.css";

function Login() {

    const [loginInfo, setLoginInfo] = useState(
        {

            email: '',
            password: ''

        }
    )

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }

    console.log('LoginInfo -> ', loginInfo)

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
       
        if (!email || !password) {
            return handleError('email and password are required ')
        }
        try {
            const url = "http://localhost:8080/auth/login";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(loginInfo)
            });
          

            const result = await response.json();

            

            const { success, message, jwtToken, name,  role, firstLogin } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem("token", jwtToken);
                localStorage.setItem("loggedInUser", name);
                localStorage.setItem("role", role);
                localStorage.setItem("firstLogin", firstLogin);

                setTimeout(() => {
                    if (role === "patient") {
                        navigate("/patientDashboard");
                    } else if (role === "doctor") {
                        navigate("/doctorDashboard");
                    } else if (role === "admin") {
                        navigate("/adminDashboard");
                    } else {
                        navigate("/home");
                    }
                }, 1000);

            } else {
                handleError(message || "Login failed");
            }

            console.log(result);
        } catch (err) {
            handleError(err);
        }
    }

    return (
        <div className='container'>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>


                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                        value={loginInfo.email}

                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={handleChange}
                        type='password'
                        name='password'

                        placeholder='Enter your password...'
                        value={loginInfo.password}

                    />
                </div>
                <button type='submit'>Login</button>
                <span>Don't have an account ?
                    <Link to='/signup'>Signup</Link>
                </span>
            </form>
            <ToastContainer />

        </div>
    )
}

export default Login
