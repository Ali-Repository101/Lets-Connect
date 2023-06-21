import react, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './style.scss'
import { Input, Button, UncontrolledAlert } from 'reactstrap';
import axios from "axios";
import { userName } from './userSlice/userSlice';
//react-icons
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useGoogleLogin } from '@react-oauth/google';
const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [userSignUp, setUserSignUp] = useState<any>({});
    console.log("userSignip out", userSignUp)
    const [message, setMessage] = useState<any>()
    const [show, setShow] = useState<boolean>(false);

    const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setUserSignUp({ ...userSignUp, [e.target.name]: e.target.value })
        }
    }
    const handleSubmit = async () => {
        console.log("userSignip in", userSignUp)
        // e.preventDefault()
        const { name, email, password, confirmPassword } = userSignUp
        const apiPostData = await axios.post("http://localhost:8000/api/user/register", {
            name: name,
            email: email,
            password: password,
            password_confirmaton: confirmPassword
        })
        setMessage(apiPostData.data.message)
        setShow(true)
        //navigate to dashboard
        if (name && email && password && confirmPassword) {
            if (password === confirmPassword && apiPostData.data.status != 'failed') {
                setTimeout(() => {
                    navigate('/dashboard')
                }, 3000)
            }
        }
    }

    const loginGoogle = useGoogleLogin({
        onSuccess: async tokenResponse => {
            const userInfo = await axios
                .get('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                })
                .then(res => res.data);
            if (userInfo.name && userInfo.email) {
                setUserSignUp({ ...userSignUp, name: userInfo.name, email: userInfo.email, password: 'test875444@#wer', confirmPassword: '567890875444@#wer' });
                handleSubmit()
            }

        },

    });


    useEffect(() => {
        if (userSignUp.name && userSignUp.email && userSignUp.password && userSignUp.confirmPassword)
        handleSubmit()
    }, [userSignUp])

    return (
        <>
            {/* Signup Form */}
            <div className='show'>
                {show &&
                    <UncontrolledAlert color="danger">
                        {message}
                    </UncontrolledAlert>
                }
            </div>
            <section className="container-fluid forms">

                <div className="form signup">
                    <div className="form-content">
                        <header>Signup form</header>
                        <form>
                            <div className="field input-field">
                                <Input type="text"
                                    placeholder="Name"
                                    name='name'
                                    className="input"
                                    onChange={handleChangeLogin}
                                />
                            </div>
                            <div className="field input-field">
                                <Input type="email"
                                    placeholder="Email"
                                    name='email'
                                    className="input"
                                    onChange={handleChangeLogin}
                                />
                            </div>
                            <div className="field input-field">
                                <Input
                                    type="password"
                                    name='password'
                                    placeholder="Create password"
                                    className="password"
                                    onChange={handleChangeLogin}
                                />
                            </div>
                            <div className="field input-field">
                                <Input
                                    type="password"
                                    name='confirmPassword'
                                    placeholder="Confirm password"
                                    className="password"
                                    onChange={handleChangeLogin}
                                />
                                <i className="bx bx-hide eye-icon" />
                            </div>
                            <div className="field button-field">
                                <Button onClick={handleSubmit}>SignUp</Button>
                            </div>
                        </form>
                        <div className="form-link">
                            <div className='d-flex justify-content-center align-items-center'><span>
                                Already have an account?</span>
                                <span><Link to={'login'} className="link login-link">
                                    Login
                                </Link></span>
                            </div>
                        </div>
                    </div>
                    <div className="line" />
                    <div className="media-options">
                        <Button outline className="field facebook" onClick={() => { loginGoogle() }}>
                            <FcGoogle />
                            <span>Login with Google</span>
                        </Button>
                    </div>
                    <div className="media-options">
                        <Button outline className="field google">
                            <MdEmail />
                            <span>Sign in with existing account</span>
                        </Button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SignUp