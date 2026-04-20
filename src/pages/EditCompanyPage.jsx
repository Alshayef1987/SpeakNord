import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCompanyPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    status: "Interested",
    notes: "",
  });

  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const savedCompanies =
      JSON.parse(localStorage.getItem("companies")) || [];

    const companyToEdit = savedCompanies.find(
      (company) => String(company.id) === String(id)
    );

    if (companyToEdit) {
      setFormData(companyToEdit);
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  }, [id]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const savedCompanies =
      JSON.parse(localStorage.getItem("companies")) || [];

    const updatedCompanies = savedCompanies.map((company) =>
      String(company.id) === String(id) ? formData : company
    );

    localStorage.setItem("companies", JSON.stringify(updatedCompanies));

    alert("Company updated successfully!");
    navigate("/companies");
  }

  if (notFound) {
    return (
      <div className="page">
        <div className="card">
          <h1>Company Not Found</h1>
          <p>The selected company could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="card">
        <h1>Edit Company</h1>
        <p>Update the company details below.</p>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="contactPerson"
            placeholder="Contact Person"
            value={formData.contactPerson}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Interested">Interested</option>
            <option value="Not Interested">Not Interested</option>
            <option value="Follow Up">Follow Up</option>
          </select>

          <textarea
            name="notes"
            placeholder="Notes"
            value={formData.notes}
            onChange={handleChange}
          />

          <button type="submit">Update Company</button>
        </form>
      </div>
    </div>
  );
}