import Navbarr from '../Navbar';
import './index.scss';
import { Outlet } from 'react-router-dom'


const Layout = () => {
    return ( <>
    <div className="App">
    <Navbarr /> 
    <div className ='page'>
        <span className='tags top-tags'></span>
        <Outlet />

        <span className='tags bottom-tags'></span>
        
        <br />
       
        
    </div>
   
    </div>

     </>
    )
}
export default Layout