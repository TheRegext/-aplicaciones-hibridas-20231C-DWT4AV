import { createContext, useContext, useEffect, useState } from "react"
import profileService from '../services/profile.service'
import authService from '../services/auth.service'
import { useNavigate } from 'react-router-dom'

const SessionContext = createContext()

function useProfile(){
    const { profile } = useContext(SessionContext)

    return profile
}

function useOnLogout(){
    const { onLogout } = useContext(SessionContext)

    return onLogout
}

function useSession(){
    const { profile, onLogout } = useContext(SessionContext)

    return { profile, onLogout }
}

function SessionProvider({children}){
    const [profile, setProfile] = useState({})
    const navigate = useNavigate()

    const onLogout = () =>{
        authService.logout()
        localStorage.removeItem('token')
        navigate('/login', {replace: true})
    }

    useEffect(() => {
        profileService.getCurrent()
        .then(profile => setProfile(profile))
    }, [])
   
    return (
        <SessionContext.Provider value={{profile, onLogout}}>
            {children}
        </SessionContext.Provider>
    )
}

export {
    useProfile,
    useOnLogout,
    useSession,
    SessionProvider
}