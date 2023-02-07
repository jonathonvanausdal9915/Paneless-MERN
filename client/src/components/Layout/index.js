import Navbarr from '../Navbar';
import './index.scss';
import {Outlet} from 'react-router-dom';
import Footer from '../Footer';


const Layout = () => {
    return (<>
            <div className="App">
                <Navbarr/>
                <div className='page'>
                    <span className='tags top-tags'/>
                    <Outlet/>
                    <span className='tags bottom-tags'/>
                    <br/>

                </div>

            </div>
            <Footer/>
        </>
    )
}
export default Layout