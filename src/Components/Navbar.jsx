import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className= "Navbar">
    
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Aboutpage">About</Link>
        </li>
        <li>
          <Link to="/Contactpage">Contact</Link>
        </li>
        <li>
          <Link to="/Faqpage">FAQ'S</Link>
        </li>
        <li>
          <Link to="/Ticketspage">Tickets</Link>
        </li>
        {/* <li>
          <Link to="/managebooking">Manage Booking</Link>
        </li> */}
      </ul>
      </nav>    
  );
}

export default Navbar;