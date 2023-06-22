import react, { useState } from 'react'
import './style.scss'
import { Button, Input } from 'reactstrap';
import { useGoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from "react-router-dom"
import { UncontrolledAlert } from 'reactstrap'
import axios from 'axios'
//react-icons
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';

const Login = () => {
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState<any>({});
    const [show, setShow] = useState<boolean>(false)
    const [message, setMessage] = useState<any>()
    console.log("login", userLogin)
    const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
        }
    }


    const handleLoginSubmit = (e:any) => {
        e.preventDefault()
        setShow(true)
        const { Email, password } = userLogin
        axios.post("http://localhost:8000/api/user/login", {
            email: Email,
            password: password,
        })

        if (Email && password) {
            setTimeout(() => {
                navigate('/dashboard')
            }, 1000)
        }
    }


    //google login
    const loginGoogle = useGoogleLogin({
        onSuccess: async tokenResponse => {
            const userInfo = await axios
                .get('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                })
                .then(res => res.data);
            if (userInfo.name && userInfo.email) {
                const apiPostData = await axios.post("http://localhost:8000/api/user/register", {
                    name: userInfo.name,
                    email: userInfo.email,
                    password: "ertt@12343",
                    password_confirmaton: "ertt@12343"
                })
                localStorage.setItem('token', JSON.stringify(apiPostData.data.token))

                //navigate to dashboard
                if (userInfo.name && userInfo.email) {
                    setTimeout(() => {
                        navigate('/dashboard')
                    }, 1000)
                }
            }



        },


    });

    return (
        <>
            <div className='show'>
        {show &&
            <UncontrolledAlert color="info">
                {message}
            </UncontrolledAlert>
        }
    </div>
            <section className="container-fluid forms custome-fluid-height">
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
                                <Button>Login</Button>
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
                    <div className="media-options d-flex justify-content-center align-items-center">
                        <Button outline className="field facebook" onClick={() => { loginGoogle() }}>
                            <FcGoogle className='me-3' />
                            <span>Continue with Google</span>
                        </Button>
                    </div>
                    <div className="media-options d-flex justify-content-center align-items-center">
                        <Button outline className="field google" onClick={() => navigate('/')}>
                            <MdEmail className='me-3' />
                            <span>Sign Up</span>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login