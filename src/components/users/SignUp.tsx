import react, { useState } from 'react';
import { Link } from "react-router-dom";
import './style.scss'
import { Input, Button } from 'reactstrap';
//react-icons
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
const SignUp = () => {
    const [userSignUp, setUserSignUp] = useState({});
    console.log("signup", userSignUp)
    const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setUserSignUp({ ...userSignUp, [e.target.name]: e.target.value })
        }
    }
    return (
        <>
            {/* Signup Form */}
            <section className="container-fluid forms">
                <div className="form signup">
                    <div className="form-content">
                        <header>Signup form</header>
                        <form action="#">
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
                                <Link to='/'>Signup</Link>
                            </div>
                        </form>
                        <div className="form-link">
                            <span>
                                Already have an account?
                                <Link to={'login'} className="link login-link">
                                    Login
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
                            <span>Sign in with existing account</span>
                        </Button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SignUp