import {useEffect, useState, useCallback} from 'react'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'
import authService from '../services/auth.service'

function LoginPage(){
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const onChangeUserName = useCallback((event) =>{
        setUserName(event.target.value)
    }, [setUserName])

    const onChangePassword = useCallback((event) =>{
        setPassword(event.target.value)
    }, [setPassword])

    useEffect(()=>{
        authService.logout()
        localStorage.removeItem('token')
    }, [])

    const onSubmit = useCallback((event) =>{
        event.preventDefault()

        authService.login({userName, password})
        .then(({token, account})=>{
            console.log("Sesion iniciada", {token, account})
            
            localStorage.setItem('token', token)

            navigate('/', {replace: true}) // reemplaza la pagina actual en el historial
        })
        .catch(e=>{
            console.log("Error al iniciar sesion", e)
            setError(e.error.message)
        })
    },[userName, password, navigate, setError] )

    return(
        <div className='login-page'>
            <form className='login-form' onSubmit={onSubmit}>
                <h1 className='login-form__title'>Iniciar Sesion</h1>
                <label className='login-form__field'>
                    Nombre de usuario:
                    <input className='login-form__username' type="text" placeholder="Tu nombre de usuario" onChange={onChangeUserName} value={userName} />
                </label>
                <label className='login-form__field'>
                    Contraseña:
                    <input className='login-form__password' type="password" placeholder="Tu contraseña" onChange={onChangePassword} value={password} />
                </label>
                <p>{error}</p>
                <button className='login-form__submit' type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default LoginPage