import {
    useState, useEffect
} from 'react'
    import axios from 'axios'
import './dashbBoard.scss'
import NavbarSection from "./Navbar"

const DashBoard = () => {
    const token = localStorage.getItem('token')
    console.log("token", token)
    const [userName, setUserName] = useState()
    console.log("userName-----", userName)
    useEffect(() => {
        const getloginUserData = async () => {
            const getUser = await axios.get("http://localhost:8000/api/user/loginuser", {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            }).then((response) => setUserName(response.data.user.name)).catch((error) => console.log(error))
        }
        getloginUserData()
    })
    
    return (
        <>
            <NavbarSection userName={userName} />
            {/* <button onClick={getloginUserData} >click</button> */}
        </>
    )
}

export default DashBoard