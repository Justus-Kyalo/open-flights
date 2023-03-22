import React from 'react'


function ReviewCard(onDeleteReview,onUpdateReview, title,description,score,id) {
    
    // const[id, score, description,title] =review

    function handleDeleteClick() {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteReview(id);
      }
    });
  }

  function handleUpdateClick() {
    fetch(`/reviews/${id}`, {
      method: "PATCH",
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
      .then((data) => {
        onUpdateReview(data);
      });
  }
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <h3>{score}</h3>
        </div>
        <button onClick={handleDeleteClick}>Delete</button>
        <button onClick={handleUpdateClick}>Update</button>
    </div>
  )
}

export default ReviewCard
