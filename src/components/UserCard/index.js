import React from 'react'
import { Link } from "react-router-dom"
import "./index.css"
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
const UserCard = (props) => {
    const { user, handleUser, handleDel } = props
    const { name, email, username, phonenumber, website, address, company } = user
    const initialName = name.slice(0, 2).toUpperCase()
    const handleUserCard = () => {
        handleUser(user.id)
    }
    const handleDelete = () => {
        handleDel(user.id)
    }
    return (
        <li className='user-detailed-view-container'>
            <div className="user-name-and-initial-container" onClick={handleUserCard}>
                <div className='user-initial-name'>{initialName}</div>
                <div className='user-name-and-company-details'>
                    <p className='user-name'>{name}</p>
                    <p className='user-company-name'><span className='user-card-company'>company</span>: {company.name}</p>
                </div>
            </div>
            <div className='user-delete-adn-add-button-container'>
                <button onClick={handleDelete} className="user-delete-button"><MdDelete /></button>
                <Link to='/update-user' className='update-button'><FaRegEdit /></Link>
            </div>
        </li>
    )
}


export default UserCard