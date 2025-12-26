import React, { createContext ,useState,useEffect} from 'react'
import { GetLocalStorage, SetLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  // localStorage.clear()

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    SetLocalStorage()
    const {employees} = GetLocalStorage()
    setUserData(employees)
  
  },[])
  

  
  return (
    <div>
      <AuthContext.Provider value = {[userData,setUserData]}>
        {children}
      </AuthContext.Provider>

    </div>
  )
}

export default AuthProvider
