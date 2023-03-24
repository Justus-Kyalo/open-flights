import React, { useEffect, useState } from "react";
import NewReviewForm from "./NewReviewForm";
import ReviewCard from "./ReviewCard";

function ReviewPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  function handleAddReview(newReview) {
    const updatedReviewsArray = [...reviews, newReview];
    setReviews(updatedReviewsArray);
  }

  function handleDeleteReview(id) {
    const updatedReviewsArray = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviewsArray);
  }

  function handleUpdateReview(updatedReview) {
    const updatedReviewsArray = reviews.map((review) => {
      return review.id === updatedReview.id ? updatedReview : review;
    });
    setReviews(updatedReviewsArray);
  }
  // const reviewData = reviews.map((review) => {
  //   return (
  //     <ReviewCard
  //       key={review.id}
  //       title={review.title}
  //       description={review.description}
  //       score={review.score}
  //     />
  //   );
  // });
  return (
    <div>
      <NewReviewForm onAddReview={handleAddReview} />
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          id={review.id}
          title={review.title}
          description={review.description}
          score={review.score}
          onDeleteReview={handleDeleteReview}
          onUpdateReview={handleUpdateReview}
        />
      ))}
    </div>
  );
}

export default ReviewPage;
