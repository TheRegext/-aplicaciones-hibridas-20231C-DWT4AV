import { Outlet, Link, useNavigate } from 'react-router-dom'

import 'minireset.css'
import "./App.css"

function App(){
    const navigate = useNavigate()

    const OnLogout = () =>{
        fetch('http://localhost:2023/api/session',{
            method: 'DELETE',
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        })

        localStorage.removeItem('token')

        navigate('/login', {replace: true})

    }
   
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Productos</Link></li>
                    <li><Link onClick={OnLogout}>Salir</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default App