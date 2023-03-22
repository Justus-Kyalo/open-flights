import { useState } from "react";

function NewReviewForm({ onAddReview }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [score, setScore] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        score: score,
      }),
    })
      .then((r) => r.json())
      .then((newReview) => onAddReview(newReview));
  }

  return (
    <div className="new-plant-form">
      <h2>New Review</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Review title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="write your review"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          name="score"
          step="0.01"
          placeholder="score ?/5"
          value={score}
          onChange={(e) => setScore(parseFloat(e.target.value))}
        />
        <button type="submit">Add Review</button>
      </form>
    </div>
  );
}

export default NewReviewForm;
