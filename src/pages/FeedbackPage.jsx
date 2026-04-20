import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FeedbackPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    rating: "5",
    comment: "",
    wouldUse: "Yes",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const existingFeedback =
      JSON.parse(localStorage.getItem("feedbacks")) || [];

    const newFeedback = {
      id: Date.now(),
      ...formData,
    };

    const updatedFeedback = [...existingFeedback, newFeedback];

    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedback));

    setFormData({
      companyName: "",
      rating: "5",
      comment: "",
      wouldUse: "Yes",
    });

    navigate("/feedback-list");
  }

  return (
    <div className="page">
      <div className="card">
        <h1>Feedback Page</h1>
        <p>Collect company feedback here.</p>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />

          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Good</option>
            <option value="3">3 - Average</option>
            <option value="2">2 - Poor</option>
            <option value="1">1 - Very Poor</option>
          </select>

          <select
            name="wouldUse"
            value={formData.wouldUse}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="Maybe">Maybe</option>
            <option value="No">No</option>
          </select>

          <textarea
            name="comment"
            placeholder="Write feedback here..."
            value={formData.comment}
            onChange={handleChange}
            required
          />

          <button type="submit">Save Feedback</button>
        </form>
      </div>
    </div>
  );
}