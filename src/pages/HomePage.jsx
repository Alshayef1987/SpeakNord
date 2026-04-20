import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [stats, setStats] = useState({
    totalCompanies: 0,
    totalFeedbacks: 0,
    interestedCompanies: 0,
  });

  const [lastCompany, setLastCompany] = useState("No company added yet");

  useEffect(() => {
    loadDashboardData();
  }, []);

  function loadDashboardData() {
    const companies = JSON.parse(localStorage.getItem("companies")) || [];
    const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

    const interestedCompanies = companies.filter(
      (company) => company.status === "Interested"
    ).length;

    setStats({
      totalCompanies: companies.length,
      totalFeedbacks: feedbacks.length,
      interestedCompanies,
    });

    if (companies.length > 0) {
      const lastAddedCompany = companies[companies.length - 1];
      setLastCompany(lastAddedCompany.companyName);
    } else {
      setLastCompany("No company added yet");
    }
  }

  return (
    <div className="page">
      <div className="card hero-card">
        <h1>Welcome 👋</h1>
        <p>
          Manage your internship tasks efficiently — track companies, feedback,
          and app demos in one place.
        </p>

        
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>{stats.totalCompanies}</h3>
          <p>Companies</p>
        </div>

        <div className="stat-card">
          <h3>{stats.totalFeedbacks}</h3>
          <p>Feedbacks</p>
        </div>

        <div className="stat-card">
          <h3>{stats.interestedCompanies}</h3>
          <p>Interested</p>
        </div>
      </div>


      <div className="dashboard-grid">
        <Link to="/add-company" className="dash-card green important">
          <span className="dash-card-icon">➕</span>
          <div className="dash-card-title">Add Company</div>
          <div className="dash-card-text">
            Save a new company, contact details, and notes after your visit.
          </div>
        </Link>

        <Link to="/feedback" className="dash-card blue important">
          <span className="dash-card-icon">💬</span>
          <div className="dash-card-title">Add Feedback</div>
          <div className="dash-card-text">
            Record feedback from companies about the app quickly and clearly.
          </div>
        </Link>

        <Link to="/demo" className="dash-card orange">
          <span className="dash-card-icon">🎬</span>
          <div className="dash-card-title">Demo</div>
          <div className="dash-card-text">
            Show the app presentation and explain the product visually.
          </div>
        </Link>

        <Link to="/app" className="dash-card purple">
          <span className="dash-card-icon">📱</span>
          <div className="dash-card-title">App Info</div>
          <div className="dash-card-text">
            Explain the app features, benefits, and use cases for companies.
          </div>
        </Link>

        <Link to="/test" className="dash-card blue">
          <span className="dash-card-icon">🧪</span>
          <div className="dash-card-title">Test App</div>
          <div className="dash-card-text">
            Let companies preview how the app works in a simple test view.
          </div>
        </Link>

        <Link to="/companies" className="dash-card green">
          <span className="dash-card-icon">📋</span>
          <div className="dash-card-title">Company List</div>
          <div className="dash-card-text">
            View, edit, and manage all companies you have already added.
          </div>
        </Link>

        <Link to="/feedback-list" className="dash-card orange">
          <span className="dash-card-icon">📝</span>
          <div className="dash-card-title">Feedback List</div>
          <div className="dash-card-text">
            Review saved feedback and track how companies responded.
          </div>
        </Link>
      </div>

      <div className="card activity-card">
        <h3>Last Activity</h3>
        <p>Last company added: {lastCompany}</p>
      </div>
    </div>
  );
}