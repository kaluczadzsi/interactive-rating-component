import { useState } from "react";
import { Container } from "./Components/Container/Container";
import ThankYou from "./Components/ThankYou/ThankYou";
import { Rating } from "./Components/Rating/Rating";
import "./App.css";

export const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <Container>
      {isSubmitted ? (
        <ThankYou rating={rating} />
      ) : (
        <Rating
          rating={rating}
          handleSubmit={() => setIsSubmitted(true)}
          handleSetRating={setRating}
        />
      )}
    </Container>
  );
};
