import React, {useState} from 'react'
import '../../css/header.css';
// import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import {Link} from "react-router-dom";
import Preloader from "./Preloader";
import {useDispatch, useSelector} from "react-redux";
import {loadUser, logoutUser} from "../../actions/authActions";

const Header = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const auth = useSelector(state => state.auth)
   /**useEffect(() => {
       loadUser()
    }, []) */ 

    return (
        <div>
            {/*preloader start */}
            <Preloader/>
            {/*preloader end */}
            <header>
                <div>
                    {/*// <!-- Navbar -->*/}
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        {/*// <!-- Container wrapper -->*/}
                        <div class="container-fluid">
                            {/*// <!-- Toggle button -->*/}
                            {/*// <!-- Collapsible wrapper -->*/}
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                {/*// <!-- Navbar brand -->*/}
                                <div className="col-lg-3 col-md-2">
                                    <div className="logo">
                                        <a href="index.html"/>
                                        <img src="assets/img/logo/logo.png" alt=""/>
                                    </div>
                                </div>
                                {/*   -------------------------------------------- Home  Routes Start --------------------------------------------- */}
                                {/*<Router>*/}
                                <div className="col-lg-9 col-md-9">
                                    <div className="menu-wrapper">
                                        <div className="main-menu">
                                            <nav className="d-none d-lg-block">
                                                <ul  style={{marginTop:"50px"}} id="navigation">
                                                   <Link to="/"><a href="#"  className="btn head-btn1">Offres</a></Link> 
                                                   <Link to="/"><a href="#"  className="btn head-btn1">Mes offres</a></Link> 
                                                   <Link to="/cv"><a href="#"  className="btn head-btn1">CreateCV</a></Link> 
                                                   <Link to="/ranking"><a href="#"  className="btn head-btn1">Ranking</a></Link> 

                                                    {/*///////////////////// Route condionnel Start (id user connecté ou nn !:) ) ////////////////*/}
                                                    <div className=" d-none f-right d-lg-block">
                                                        {auth.isAuth ? (
                                                            <>
                                                                {/*<Link to="/profile"><a href="#"*/}
                                                                {/*                       className="btn head-btn1">Profile</a></Link>*/}
                                                                <Link onClick={() => dispatch(logoutUser())}>Log out<a href="#" className="btn head-btn1"></a></Link>

                                                                {/*<Link onClick={() => dispatch(logoutUser())}>Log out</Link>*/}
                                                            </>
                                                        ) : (
                                                            <>
                                                                {/*<Link to="/register"><a href="#"*/}
                                                                {/*                        className="btn head-btn1">Register</a></Link>*/}
                                                                <Link to="/inscription"><a href="#"
                                                                                           className="btn head-btn1">Register</a></Link>
                                                                {/*<Link to={`/inscription/${id}`}><a href="#"*/}
                                                                {/*                           className="btn head-btn1">Register</a></Link>*/}

                                                                <Link to="/login"><a href="#"
                                                                                     className="btn head-btn1">Login</a></Link>
                                                                {/*<Link to="/profile">*/}
                                                                {/*    <a href="#"*/}
                                                                {/*                       className="btn head-btn1">Profile</a></Link>*/}
                                                            </>
                                                        )
                                                        }
                                                    </div>
                                                    {/*///////////////////// Route condionnel End (id user connecté ou nn !:) ) ////////////////*/}
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                {/*   -------------------------------------------- Home  Routes End --------------------------------------------- */}
                            </div>
                            {/*// <!-- Collapsible wrapper -->*/}
                            {/*// <!-- Right elements -->*/}
                            <div class="d-flex align-items-center">
                                {/*// <!-- Icon -->*/}
                                {/*// <!-- Notifications -->*/}
                                { auth.isAuth && <a
                                    class="text-reset me-3 dropdown-toggle hidden-arrow"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class="fas fa-bell"></i>
                                    <span class="badge rounded-pill badge-notification bg-danger">1</span>
                                </a>}


                                {/*// <!-- Avatar -->*/}
                                 {/*// <!-- Avatar -->*/}
                                { auth.isAuth &&
                                

                                         <Link to="/profile">
                                             
                                            <div className="person-radius">
                                            <img style={{'marginLeft':'10px','width':'15px'}} src={"/assets/img/logo/online.svg"}/>
                                            <img src={auth.user && auth.user.selectedFile}/>
                                        </div>
                                        </Link>
                                       
                                    
                                          
                                       /** <Link to="/profile">
                                        <img style={{boxShadow: '0 0 98px 6px rgba(0, 0, 0, 0.2)', borderRadius: '50%', width:'30px', height:'40px'
                                        }} src={auth.user && auth.user.selectedFile} className="rounded-circle" height="20" alt="" loading="lazy"/>
                                    </Link>*/
                               
                                }
                            </div>
                            {/*// <!-- Right elements -->*/}
                        </div>
                        {/*// <!-- Container wrapper -->*/}
                    </nav>
                    {/*// <!-- Navbar -->*/}
                </div>
                <div className="header-area header-transparrent">
                    <div className="headder-top header-sticky">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-2">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header
