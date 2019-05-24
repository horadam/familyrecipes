import React, { useEffect, useContext } from 'react'
import { AuthContext } from "../lib/auth"
import { Link } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'
import Logout from './auth/Logout.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUpload } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faHome, faUpload)


const LogoutButton = props => {

    const { user } = useContext(AuthContext)

    useEffect(() => {

    }, [user])

    const options = [

        { key: 1, text: <Link to="/user_profile">{user}</Link>, value: 1 },
        { key: 2, text: 'test option', value: 2 },
        { key: 3, text: <Logout />, value: 3 },
        
      ]

    return (

        <div className="logoutDiv">
        <Link to="/"><button className="abutton"><FontAwesomeIcon className='fa' icon="home" /> Home</button></Link>
        <div className='space'></div>
        <Link to="/upload"><button className="abutton"><FontAwesomeIcon className='fa' icon="upload" /> Upload</button></Link>
        <div className='space'></div>
        {/* <Link to="/user_profile"><button className='userSpan'>{user}</button></Link> */}
       
         <Dropdown className='dropdownBtn' text='My Profile'selection options={options}  />
    
        </div>
    )
}

export default LogoutButton
