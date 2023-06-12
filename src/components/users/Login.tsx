import './style.scss'
import { Button, Input } from 'reactstrap';

const Login = () => {
    return (
        <>
            <section className="container forms">
                <div className="form login">
                    <div className="form-content">
                        <header>Login</header>
                        <form action="#">
                            <div className="field input-field">
                                <Input type="email" placeholder="Email" className="input" />
                            </div>
                            <div className="field input-field">
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    className="password"
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
                            <span>
                                Don't have an account?{" "}
                                <a href="#" className="link signup-link">
                                    Signup
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="line" />
                    <div className="media-options">
                        <a href="#" className="field facebook">
                            <i className="bx bxl-facebook facebook-icon" />
                            <span>Login with Facebook</span>
                        </a>
                    </div>
                    <div className="media-options">
                        <a href="#" className="field google">
                            <img src="#" alt="" className="google-img" />
                            <span>Login with Google</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login