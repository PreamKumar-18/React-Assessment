import React, { useState } from 'react'

import { useNavigate, useParams, Link } from "react-router-dom"
 import "./style.css"
import { TailSpin } from 'react-loader-spinner'
import { Data } from './Data';


export const UserDetails = () => {

    const [username, setUsername] = useState("")
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        setUsername(e.target.value)
    }
    const handleLogin = (e) => {
        e.preventDefault()
        
        if (username === "admin") {
            navigate(`/Nav/${username}`)
        }
        else {
            navigate("/Error")
        }

    }

    return (
        <div>
            <h1>Hello</h1>
            <div className='form'>
                <form className='form-card'>
                    Username:<input type="text" placeholder="Enter Username...." onChange={(e) => handleChange(e)} ></input><br></br>
                    <button className="btn btn-primary" onClick={(e) => handleLogin(e)}>Login</button>
                </form>
            </div>
        </div>
    )
}
export const Nav = () => {

    const [search,setSearch] = useState("")
    const { uname } = useParams()
    return (
        <div>
            <h1>Student Info</h1>
            <h3>Welcome:{uname}</h3>
            <input type="text" 
            placeholder="search.."
            onChange={(e)=>{
              setSearch(e.target.value) 
            }}
            />
            {Data.length > 0 ? (
                <div className='wrapper'>
                    {Data.filter((val)=>{
                        if(search===""){
                          return val
                        }else (val.name.toLowerCase().includes(search.toLowerCase())); {
                          return val
                        }
                    }) .map((item, key) => {
                        return (
                            <div>
                                <div key={key} className="card">
                                    <h4>Name :{item.name}</h4>
                                    <h4>Mobile:{item.mobile}</h4>
                                    <h4>Email:{item.email}</h4>
                                    
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div className="spinner">
                    <TailSpin color="#00BFFF" height={250} width={300} />
                </div>
            )}

            <div>
                <Link className="btn btn-danger" to="/Hello">Logout</Link>
            </div>
        </div>
    )
}
export const NotFound = () => {
    return (
        <div>
            <div className="spinner">
                <TailSpin color="#00BFFF" height={250} width={300} />
            </div>
            <h1>Error 404 Not Found!</h1>
        </div>
    )
}
export const Error = () => {
    return (
        <div>
            <h1>Sorry! login again!</h1>
            <UserDetails />
        </div>
    )
}