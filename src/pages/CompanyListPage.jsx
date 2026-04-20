import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CompanyListPage() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    loadCompanies();
  }, []);

  function loadCompanies() {
    const savedCompanies =
      JSON.parse(localStorage.getItem("companies")) || [];
    setCompanies(savedCompanies);
  }

  function handleDelete(index) {
    const updatedCompanies = [...companies];
    updatedCompanies.splice(index, 1);

    localStorage.setItem("companies", JSON.stringify(updatedCompanies));
    setCompanies(updatedCompanies);
  }

  return (
    <div className="page">
      <div className="card">
        <h1>Company List</h1>

        {companies.length === 0 ? (
          <p>No companies added yet.</p>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th>Notes</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {companies.map((company, index) => (
                  <tr key={company.id || index}>
                    <td>{company.companyName}</td>
                    <td>{company.contactPerson}</td>
                    <td>{company.phone}</td>
                    <td>{company.email}</td>
                    <td>{company.address}</td>
                    <td>{company.status}</td>
                    <td>{company.notes}</td>
                    <td>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <Link
                          to={`/edit-company/${company.id}`}
                          style={{
                            background: "#2563eb",
                            color: "white",
                            textDecoration: "none",
                            padding: "6px 10px",
                            borderRadius: "6px",
                          }}
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => handleDelete(index)}
                          style={{
                            background: "red",
                            color: "white",
                            border: "none",
                            padding: "6px 10px",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}