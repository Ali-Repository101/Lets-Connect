import { Button, Input } from "reactstrap"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'
const DashBoard = () => {
    const [password, setPassword] = useState<string>()
    const [cnfrmPassword, setCnfrmPassword] = useState<string>()
    const token = localStorage.getItem('token')
    console.log("token,", token)
    const handlePasswordChange = (e: any) => {
        e.preventDefault()
        fetch("http://localhost:8000/api/user/changepassword", {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                password: password,
                password_confirmaton: cnfrmPassword
            })
        }).then((res) => res.json()).then((data) => console.log("datadash", data))
    }

    const getUserData = (e: any) => {
        e.preventDefault()
        fetch("http://localhost:8000/api/user/loginuser", {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        }).then((res) => res.json()).then((data) => console.log("getData", data))
    }
    return (
        <>
            <h1>DashBoard Page</h1>
            <form >
                <div className="field input-field">
                    <Input type="text"
                        placeholder="Name"
                        name='password'
                        className="input"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                    <Input type="text"
                        placeholder="Name"
                        name='confirmpassword'
                        className="input"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCnfrmPassword(e.target.value)}
                    />
                </div>
                <button onClick={handlePasswordChange}>Click</button>
                <button onClick={getUserData}>Get Data</button>
            </form>
        </>
    )
}

export default DashBoard