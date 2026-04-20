import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        SpeakNord
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/app">App</Link>
        <Link to="/demo">Demo</Link>
        <Link to="/test">Test App</Link>
        <Link to="/companies">Company List</Link>
        <Link to="/feedback-list">Feedback List</Link>

        <Link className="feedback-btn" to="/feedback">
          💬 Add Feedback
        </Link>

        <Link className="add-btn" to="/add-company">
          Add Company
        </Link>
      </div>
    </nav>
  );
}