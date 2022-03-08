import { Outlet,Link} from "react-router-dom";
    
const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5 sticky-top ">
            <div className="container-fluid">
                <a className="navbar-brand"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        { <li className="nav-item">
                            <Link to ="/ReactJS" className="nav-link" aria-current="page">
                                Home
                            </Link>
                        </li> }
                        <li className="nav-item">
                            <Link to ="/ReactJS/Saturday" className="nav-link" aria-current="page">
                                Saturday
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/ReactJS/Sunday" className="nav-link" aria-current="page">
                                Sunday
                            </Link>
                        </li>

    
                    </ul>
                    </div>
                </div>
                
            </nav>
            <Outlet />
        </>
    )
}
    
export default Navbar;