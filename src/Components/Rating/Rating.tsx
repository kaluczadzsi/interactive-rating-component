import { Ratings } from "../Ratings/Ratings";
import { RatingProps } from "./types";

export const Rating = ({
  handleSubmit,
  handleSetRating,
  rating,
}: RatingProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <img src="src/img/icon-star.svg" alt="star image" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Ratings handleSetRating={handleSetRating} />
      <button disabled={Boolean(rating === 0)} type="submit">
        submit
      </button>
    </form>
  );
};
