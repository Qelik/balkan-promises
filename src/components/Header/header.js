import { Outlet, Link, useLocation } from "react-router-dom";
import './header.css';

const Header = () => {
    const location = useLocation();

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top m-3">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <p className="navbar-brand">Balkan Promises</p>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/tournament" ? "active" : ""}`} to="/tournament">Tournament</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Document
                                </a>
                                <ul class="dropdown-menu">
                                    <li><Link className={`dropdown-item ${location.pathname === "/document" ? "active" : ""}`} to="/document">Document</Link></li>
                                    <li><Link className={`dropdown-item ${location.pathname === "/article" ? "active" : ""}`} to="/article">Article</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Header;