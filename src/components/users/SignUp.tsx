import './style.scss'
const SignUp = () => {
    return (
        <>
            {/* Signup Form */}
            <div className="form signup">
                <div className="form-content">
                    <header>Signup</header>
                    <form action="#">
                        <div className="field input-field">
                            <input type="email" placeholder="Email" className="input" />
                        </div>
                        <div className="field input-field">
                            <input
                                type="password"
                                placeholder="Create password"
                                className="password"
                            />
                        </div>
                        <div className="field input-field">
                            <input
                                type="password"
                                placeholder="Confirm password"
                                className="password"
                            />
                            <i className="bx bx-hide eye-icon" />
                        </div>
                        <div className="field button-field">
                            <button>Signup</button>
                        </div>
                    </form>
                    <div className="form-link">
                        <span>
                            Already have an account?{" "}
                            <a href="#" className="link login-link">
                                Login
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
        </>
    )
}

export default SignUp