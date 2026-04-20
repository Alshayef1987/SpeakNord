import { useEffect, useState } from "react";

export default function FeedbackListPage() {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    loadFeedback();
  }, []);

  function loadFeedback() {
    const savedFeedback =
      JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbackList(savedFeedback);
  }

  function handleDelete(id) {
    const updatedFeedback = feedbackList.filter(
      (item) => item.id !== id
    );

    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedback));
    setFeedbackList(updatedFeedback);
  }

  return (
    <div className="page">
      <div className="card">
        <h1>Feedback List</h1>

        {feedbackList.length === 0 ? (
          <p>No feedback added yet.</p>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Rating</th>
                  <th>Would Use</th>
                  <th>Comment</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {feedbackList.map((item) => (
                  <tr key={item.id}>
                    <td>{item.companyName}</td>
                    <td>{item.rating}</td>
                    <td>{item.wouldUse}</td>
                    <td>{item.comment}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
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