import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>SpeakNord</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/app">App</Link>
        <Link to="/demo">Demo</Link>
        <Link to="/test">Test App</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/companies">List</Link>
        <Link className="add-btn" to="/add-company">
          ➕ Add Company
        </Link>
      </div>
    </nav>
  );
}