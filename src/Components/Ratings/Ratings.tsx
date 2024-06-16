import { RatingsProps } from "./types";

export const Ratings = ({ handleSetRating }: RatingsProps) => {
  return (
    <div className="group">
      {[1, 2, 3, 4, 5].map((rating) => (
        <button
          onClick={() => handleSetRating(rating)}
          type="button"
          key={rating}
        >
          {rating}
        </button>
      ))}
    </div>
  );
};
