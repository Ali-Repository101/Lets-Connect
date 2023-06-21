import react, { useState } from 'react'
import './style.scss'
import { Button, Input } from 'reactstrap';
//react-icons
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { Link } from "react-router-dom"
import {UncontrolledAlert} from 'reactstrap'

const Login = () => {
    const [userLogin, setUserLogin] = useState<any>({});
    const [show, setShow] = useState<boolean>(false)
    const [message, setMessage] = useState<any>()
    console.log("login", userLogin)
    const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
        }
    }

    const handleLogin = () => {
        console.log("value")
    }
    const handleLoginSubmit = (e:any) => {
        e.preventDefault()
        setShow(true)
        const { Email, password } = userLogin
        fetch("http://localhost:8000/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                email: Email,
                password: password,
            })
        }).then((res) => res.json())
            .then((data) =>
            // setMessage(data.message))
                console.log("data",data))

    }

    return (
        <>
            <div className='show'>
        {show &&
            <UncontrolledAlert color="info">
                {message}
            </UncontrolledAlert>
        }
    </div>
            <section className="container-fluid forms">
                <div className="form login">
                    <div className="form-content">
                        <header>Login</header>
                        <form onClick={handleLoginSubmit}>
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
                                <Link to=""> <Button onClick={handleLogin}>Login</Button></Link>
                            </div>  
                        </form>
                        <div className="form-link">
                            <div className='d-flex justify-content-center align-items-center'>
                                <span>
                                    Don't have an account?
                                </span>
                                <span>
                                    <Link to="/" className="link signup-link">
                                        Signup
                                    </Link>
                                </span>
                            </div>

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