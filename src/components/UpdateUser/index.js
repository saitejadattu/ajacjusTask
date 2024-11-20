import React, { useState } from 'react'
import "./index.css"
import axios from "axios"
import NavBar from '../NavBar'
const UpdateUser = () => {
    const [userData, setUserData] = useState({ name: '', email: '', phone: '', website: '' })
    const [userAddress, setUserAddress] = useState({ street: '', suite: '', city: '', zipcode: '' })
    const [userJobDetailes, setUserJobDetailes] = useState({ name: '', catchPhrase: '', bs: '' })
    const handleInput = (e) => {
        const { name, value } = e.target
        setUserData((prevState) => ({ ...prevState, [name]: value }))
    }
    const handleAddressInput = (e) => {
        const { name, value } = e.target
        setUserAddress((prevState) => ({ [name]: value }))
    }
    const handleCompanyInput = (e) => {
        const { name, value } = e.target
        setUserJobDetailes((prevState) => ({ [name]: value }))
    }
    const handleForm = async (e) => {
        e.preventDefault()
        const resposne = await axios.post("https://jsonplaceholder.typicode.com/users/1", userData, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        console.log(resposne)
    }
    return (
        <div className='user-list-bg-container'>
            <NavBar />
            <div className='add-user-container'>
                <form onSubmit={handleForm} className='add-user-form-container'>
                    <br />
                    <label htmlFor="name">UserName</label>
                    <input id="name" onChange={handleInput} value={userData.name} type="text" placeholder='Enter your name' name="name" className='add-input' required />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input id="email" onChange={handleInput} value={userData.email} type="text" placeholder='Enter your name' name="email" className='add-input' required />
                    <br />
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" onChange={handleInput} value={userData.phone} type="number" placeholder='Enter your phone number' name="phone" className='add-input' required />
                    <br />
                    <label htmlFor="website">Website</label>
                    <input id="website" onChange={handleInput} value={userData.website} type="text" placeholder='Enter your website' name="website" className='add-input' required />
                    <br />
                    <label htmlFor="street">Street</label>
                    <input id="street" onChange={handleAddressInput} value={userAddress.street} type="text" placeholder='Enter your street' name="street" className='add-input' required />
                    <br />
                    <label htmlFor="suite">Suite</label>
                    <input id="suite" onChange={handleAddressInput} value={userAddress.suite} type="text" placeholder='Enter your suite' name="suite" className='add-input' required />
                    <br />
                    <label htmlFor="city">City</label>
                    <input id="city" onChange={handleAddressInput} value={userAddress.city} type="text" placeholder='Enter your city' name="city" className='add-input' required />
                    <br />
                    <label htmlFor="zipcode">Zipcode</label>
                    <input id="zipcode" onChange={handleAddressInput} value={userAddress.zipcode} type="text" placeholder='Enter your zipcode' name="zipcode" className='add-input' required />
                    <br />
                    <label htmlFor="name">Company name</label>
                    <input id="name" onChange={handleCompanyInput} value={userJobDetailes.name} type="text" placeholder='Enter your name' name="name" className='add-input' required />
                    <br />
                    <label htmlFor="catchPhrase">CatchPhrase</label>
                    <input id="catchPhrase" onChange={handleCompanyInput} value={userJobDetailes.catchPhrase} type="text" placeholder='Enter your catchPhrase' name="catchPhrase" className='add-input' required />
                    <br />
                    <label htmlFor="bs">Bs</label>
                    <input id="bs" onChange={handleCompanyInput} value={userData.bs} type="text" placeholder='Enter your bs' name="bs" className='add-input' required />
                    <br />
                    <button className='submit-button' type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}


export default UpdateUser