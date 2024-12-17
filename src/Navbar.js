import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The dojo blog</h1>
            <Link to="/">Home</Link>
            <Link to="/create">Create new blog</Link>
        </nav>
     );
}
 
export default Navbar;