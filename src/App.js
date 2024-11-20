import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserList from './components/UserList'
import UserCard from './components/UserCard'
import UpdateUser from './components/UpdateUser'
import AddUser from './components/AddUser'
import "./App.css"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route path="/user-detailed-view" element={<UserCard />}></Route>
        <Route path="/update-user" element={<UpdateUser />}></Route>
        <Route path="/add-user" element={<AddUser />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App