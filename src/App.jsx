import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AuthService from './appwrite/auth'

import './App.css'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    AuthService.getCurrentUser()
    .then()
    .finally()
  },[])

 
  return (
    <>
    <h1 className=''>A Blog App With AppWrite</h1>
    </>
  )
}

export default App
