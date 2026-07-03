import {React, useState} from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import Login, { login } from '../store/authSlice'
import {Button, Logo, Input} from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'


function SignUp() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async (data) =>{
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <></>
    )
}

export default SignUp
