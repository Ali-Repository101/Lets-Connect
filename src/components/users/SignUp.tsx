import react, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './style.scss'
import { Input, Button, UncontrolledAlert } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
//react-icons
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
const SignUp = () => {
    const [userSignUp, setUserSignUp] = useState<any>({});
    const [message, setMessage] = useState<any>()
    const [show, setShow] = useState<boolean>(false)
    console.log("signup", userSignUp)
    const navigate = useNavigate()
    const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setUserSignUp({ ...userSignUp, [e.target.name]: e.target.value })
        }
    }   
    const handleSubmit = async(e: any) => {
        e.preventDefault()
        const { name, email, password, confirmPassword } = userSignUp
        setShow(true)
       await fetch("http://localhost:8000/api/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                password_confirmaton: confirmPassword
            })
        }).then((res) => res.json())
            .then((data) =>
                // console.log("data", data))
                localStorage.setItem("userInfo", JSON.stringify(data))).catch(error => {
                    console.log("error", error.response.data.message)
                })
                // setMessage(data.message))
                // setMessage(data.message))
                const userInfo = localStorage.getItem("userInfo")
        console.log("userInfo", userInfo)
        if (userInfo) {
            navigate('/login')
        } else {
            navigate('/')
        }
    }
    
    return (
        <>
            {/* Signup Form */}
            <div className='show'>
                {show &&
                    <UncontrolledAlert color="info">
                        {message}
                    </UncontrolledAlert>
                }
            </div>
            <section className="container-fluid forms">

                <div className="form signup">
                    <div className="form-content">
                        <header>Signup form</header>
                        <form >
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
                                <Link to="/"> <Button onClick={handleSubmit}>SignUp</Button></Link>
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