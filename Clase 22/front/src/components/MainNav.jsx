import { Link } from "react-router-dom"
import { useSession } from "../contexts/session.context";

import './MainNav.css'

function MainNav(){
    const { onLogout, profile } = useSession() 

    return  <nav className="main-nav">
                <ul className="main-nav-list">
                    <li><Link to='/' className="main-nav-list__link">Home</Link></li>
                    <li><Link to='/products' className="main-nav-list__link">Productos</Link></li>
                    <li><Link onClick={onLogout} className="main-nav-list__link">Salir ({profile.name})</Link></li>
                </ul>
            </nav>
}

export default MainNav;