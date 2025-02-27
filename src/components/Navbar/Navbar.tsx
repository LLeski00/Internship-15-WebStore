import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="products/new">Add new product</Link>
        </nav>
    );
};

export default NavBar;
