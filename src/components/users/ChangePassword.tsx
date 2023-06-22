import { Input, Button, UncontrolledAlert } from 'reactstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { MdEmail } from 'react-icons/md'
import './style.scss'
const ChangePassword = () => {
    const token = localStorage.getItem('token')
    const [password, setPassword] = useState('')
    const [cnfrmPassword, setCnfrmPassword] = useState('')
    const [show, setShow] = useState<boolean>(false)
    const [message, setmessage] = useState({
        color: '',
        message:''
    })
    console.log(message)
    const handleChangePassword = async (e: any) => {
        setShow(true)
        e.preventDefault()
        await fetch('http://localhost:8000/api/user/changepassword', {
            method: 'POST',
            headers: {
                "Authorization": 'Bearer ' + token,
                "Content-Type": "Application/json",
                "Accept": "Application/json",
                "Access-Control-Allow-Origin": "*"
            }, body: JSON.stringify({
                password: password,
                password_confirmaton: cnfrmPassword
            })
        }).then((res) => res.json())
        .then((data) =>
        // setMessage(data.message))
            // console.log("data",data))
            setmessage({
                color: data.status,
                message:data.message
            }))
    }
    return (
        <>
            <div className='show'>
                {show &&
                    <UncontrolledAlert color={message.color}>
                        {message.message}
                    </UncontrolledAlert>
                }
            </div>
            <section className="container-fluid forms">
                <div className="form signup">
                    <div className="form-content">
                        <header>Change Password</header>
                        <form>
                            <div className="field input-field">
                                <Input
                                    type="password"
                                    name='password'
                                    placeholder="Change password"
                                    className="password"
                                    onChange={(e: any) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="field input-field">
                                <Input
                                    type="password"
                                    name='confirmPassword'
                                    placeholder="Confirm password"
                                    className="password"
                                    onChange={(e: any) => setCnfrmPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="field button-field">
                                <Button onClick={handleChangePassword}>Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ChangePassword