import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav>
            <h1>WebStore</h1>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="products/new">Add new product</Link>
            </div>
        </nav>
    );
};

export default NavBar;
