import React from "react"
import { Link, useNavigate } from "react-router-dom"
import ButtonComponent from "../Buttons/Button"
import { useAuthentication } from "../../Contexts/Authentication.context"


export default function Navbar({ onLogin = () => { } }) {
    const { loggedIn, setLoggedIn } = useAuthentication();
    const navigate = useNavigate();
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark " data-bs-theme="dark" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to={''}>Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={'/home'} className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/contact'} className='nav-link'>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/formik'} className='nav-link'>Formik</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/ref'} className='nav-link' >Use Ref Playground</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/refform'} className='nav-link'>Use Ref Form</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/todo'} className='nav-link' >Todo</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to={'/product'} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                    Products
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link to={'/product/groceries'} className="dropdown-item">Groceries</Link></li>
                                    <li><Link to={'/product/perfumes'} className="dropdown-item">Perfumes</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to={'/groceries'} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                    Groceries
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link to={'/groceries/vegetables'} className="dropdown-item">Vegetables</Link></li>
                                    <li><Link to={'/groceries/oil'} className="dropdown-item">Oil</Link></li>
                                    <li><Link to={'/groceries/meat'} className="dropdown-item">Meat</Link></li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                    {!loggedIn && (
                        <React.Fragment>
                            <ButtonComponent label="Login"
                                className="btn"
                                onClick={() => {
                                    setLoggedIn(true);
                                    navigate("/cart")
                                }} />
                            <ButtonComponent label="Signup" className="btn" />
                            
                        </React.Fragment>
                    )}
                    <Link to={'/cart'} className='nav-link' style={{ color: "white" }}><i className='bx bx-cart bx-md bx-fw bx-pull-right' style={{ color: "white" }}></i>Cart</Link>
                </div>
            </nav>
        </div>
    )
}