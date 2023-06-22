import React, { useEffect, useState } from 'react';
import logo from '../../../src/assests/squadmind.png';
import axios from 'axios'
import './dashbBoard.scss'
import {
    Navbar,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Button
} from 'reactstrap';
import { BsFillChatRightFill } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import IntercomWidget from './IntercomWidget';
import { useNavigate } from 'react-router-dom';

function NavbarSection(props: any) {
    const navigate = useNavigate()
    const profileList = [' Open VoicePing App', ' View DashBoard', 'Change Password', 'Sign Out'];
    const [activeProfile, setActiveProfile] = useState<number>();
    const [openChat, setOpenChat] = useState(false)
    const [userLogin, setUserLogin] = useState<string>("")
    const token = localStorage.getItem('token');



    useEffect(() => {
        const getUserData = async () => {
            // e.preventDefault()
            const getUser = await axios.get("http://localhost:8000/api/user/loginuser", {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            })
            setUserLogin(getUser.data.user.name)
        }
        if (!userLogin) {
            getUserData();
        }
    })

    const userLoggedOut = (i: number, profile: string) => {
        setActiveProfile(i)
        if (profile === 'Sign Out') {
            if (token) {
                localStorage.removeItem('token')
                navigate('/')
            }
        }
    }
    return (
        <div className='master-div'>
            <Navbar
                className=""
                color="dark"
                dark
            >
                <div className='workspace'>
                    <UncontrolledDropdown
                        className="px-3"
                        direction="down"
                    >
                        <DropdownToggle
                            caret
                            size="medium"
                            className='workspace-name'
                        >
                            workspace name
                        </DropdownToggle>
                        <DropdownMenu className='workspace-dropdown'>
                            <DropdownItem className='workspace-item'>
                                Header
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
                <div className='user-profile'>
                    <UncontrolledDropdown
                        className="me-3"
                        direction="down"
                    >
                        <DropdownToggle
                            caret
                            size="medium"
                            className='profile-name'
                        >
                            <span className='me-2'>
                                <img className='me-3' src='https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png' height={50} width={50} />
                                {userLogin}
                            </span>

                        </DropdownToggle>
                        <DropdownMenu>
                            {profileList.map((profile, i) => {
                                return <DropdownItem className={activeProfile === i ? `active-profile` : `profile-dropdown`} onClick={() => userLoggedOut(i, profile)}>
                                    {profile}
                                </DropdownItem>
                            })}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            </Navbar >

            {/* main-image */}
            <section className='main-image position-relative'>
                <div className='container'>
                    <div className='inner-main'>
                        <img src={logo} alt='logo' className='image-logo' />

                        <Button
                            color="primary"
                            className='open-voice-ping'
                        >
                            Open VoicePing App
                        </Button>
                        <span className='dont-voice-ping'>Don’t have VoicePing App?</span>
                        <span className='download-link'>
                            Downoad Now
                        </span>
                    </div>
                </div>
                <div className='chat-backround'>
                    <span className='chat-help-section' onClick={() => setOpenChat(!openChat)}>{openChat ? <MdOutlineKeyboardArrowDown /> : <BsFillChatRightFill />}</span>
                </div>
                {openChat === true && <IntercomWidget />}
            </section>
        </div >

    );
}

export default NavbarSection;