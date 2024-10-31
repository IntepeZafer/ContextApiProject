import AuthContext from '../public/Context/authContext'
import Auth from '../public/AuthCompanent/Auth'
import { useState } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState(false)
  const loginAuth = () => {
    setStatus(true)
  }
  return (
    <AuthContext.Provider value={{status : status , login : loginAuth}}>
      <Auth />
    </AuthContext.Provider>
  )
}

export default App
