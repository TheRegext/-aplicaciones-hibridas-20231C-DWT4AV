import { Outlet} from 'react-router-dom'
import MainHeader from './components/MainHeader'
import { SessionProvider } from './contexts/session.context'

import 'minireset.css'
import "./App.css"

function App(){
   
    return (
        <SessionProvider>
            <MainHeader />
            <Outlet />
        </SessionProvider>
    )
}

export default App