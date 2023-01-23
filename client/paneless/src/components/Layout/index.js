import Navbarr from '../Navbar';
import './index.scss';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';


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
    <Footer />
     </>
    )
}
export default Layout