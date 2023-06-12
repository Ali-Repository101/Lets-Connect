import react, { useState } from 'react'
import './style.scss'
import { Button, Input } from 'reactstrap';
//react-icons
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { Link } from "react-router-dom"

const Login = () => {
    const [userLogin, setUserLogin] = useState({});
    console.log("login", userLogin)
    const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
        }
    }

    const handleLogin = () => {
        console.log("value")
    }

    return (
        <>
            <section className="container-fluid forms">
                <div className="form login">
                    <div className="form-content">
                        <header>Login</header>
                        <form action="#">
                            <div className="field input-field">
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    className="input"
                                    name="Email"
                                    onChange={handleChangeUser} />
                            </div>
                            <div className="field input-field">
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    className="password"
                                    name="password"
                                    onChange={handleChangeUser}
                                />
                                <i className="bx bx-hide eye-icon" />
                            </div>
                            <div className="form-link">
                                <a href="#" className="forgot-pass">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="field button-field">
                                <Button onClick={handleLogin}>Login</Button>
                            </div>
                        </form>
                        <div className="form-link">
                            <span>
                                Don't have an account?
                                <Link to="/" className="link signup-link">
                                    Signup
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="line" />
                    <div className="media-options">
                        <Button outline className="field facebook">
                            <FcGoogle />
                            <span>Login with Google</span>
                        </Button>
                    </div>
                    <div className="media-options">
                        <Button outline className="field google">
                            <MdEmail />
                            <span>Register</span>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login