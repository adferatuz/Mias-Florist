import { Outlet } from "react-router";
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import './styles/layoutStyles.css';

export default function Layout (){ 
 
    return(
        <section className="layout">
            <Navbar/>                
            <Outlet/>           
            <Footer/>                              
        </section>        
    )
}
