import React, { useEffect, useState } from 'react'
import Loader from "react-loader-spinner"
import axios from "axios"
import "./index.css"
import NavBar from '../NavBar'
import UserCard from '../UserCard'
import { FaSuitcase } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import { GiPositionMarker } from "react-icons/gi";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
const UserList = () => {
    const [userList, setUserList] = useState([])
    const [activeUser, setActiveUser] = useState(1)
    const fetchUserData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        if (response.status === 200) {
            setUserList(response.data)
        } else {
            alert("failed")
        }
    }
    useEffect(() => {
        fetchUserData()
    }, [])
    const handleUser = (id) => {
        setActiveUser(id)
    }
    const handleDel = (id) => {
        const updatedUserList = userList.filter((eachUser) => eachUser.id !== id)
        setUserList(updatedUserList)
        setActiveUser(id+1)
    }
    const findUser = userList.find((eachUser) => eachUser.id === activeUser)
    return (
        <div className='user-list-bg-container'>
            <NavBar />
            <div className='user-list-container'>
                <ul className='user-list-unordered-list'>
                    {userList ? userList.map((eachUser) => <UserCard key={eachUser.id} user={eachUser} handleDel={handleDel} handleUser={handleUser} />) : <p>loading....</p>}
                </ul>
                <div className='user-profile-detailes'>
                
                    <div className='user-profile-photo-container'>
                        
                        <div className='user-name-and-location'>
                            <div className='user-location'>Location  </div>
                            <p className='user-location-city-name'> {findUser && findUser.address.city}</p>
                        </div>
                        <div className='user-name-and-company-name'>
                            <h1 className='user-detailed-name'>{findUser && findUser.name}</h1>
                            <p className='user-company-name'>{findUser && findUser.company.name}</p>
                        </div>
                        <hr />
                        <div className='user-description-main-container'>
                            <div className='user-description-container'>
                                <div className='user-icon-and-details'>
                                    <div className='icons'>
                                        <FaSuitcase />
                                        <p className='user-de'>domine</p>
                                    </div>
                                    <p className='user-details'>{findUser && findUser.company.catchPhrase}</p>
                                </div>
                                <div className='user-icon-and-details'>
                                    <div className='icons'>
                                        <ImOffice />
                                        <p className='user-de'>office</p>
                                    </div>
                                    <p className='user-details'>{findUser && findUser.company.name}</p>
                                </div>
                                <div className='user-icon-and-details'>
                                    <div className='icons'>
                                        <GiPositionMarker />
                                        <p className='user-de'>address</p>
                                    </div>
                                    <p className='user-details'>{findUser && findUser.address.city} {findUser && findUser.address.street}</p>
                                </div>
                                <div className='user-icon-and-details'>
                                    <div className='icons'>
                                        <MdOutlineMail />
                                        <p className='user-de'>mail</p>
                                    </div>
                                    <p className='user-details'>{findUser && findUser.email}</p>
                                </div>
                                <div className='user-icon-and-details'>
                                    <div className='icons'>
                                        <FaPhoneAlt />
                                        <p className='user-de'>mobile number</p>
                                    </div>
                                    <p className='user-details'>{findUser && findUser.phone}</p>
                                </div>
                                <div className='user-icon-and-details'>
                                    <div className='icons'>
                                        <CgWebsite />
                                        <p className='user-de'>website</p>
                                    </div>
                                    <div className='user-details'><p >{findUser && findUser.website}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserList