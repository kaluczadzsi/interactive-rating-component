export interface RatingProps {
  handleSubmit: () => void;
  handleSetRating: (rating: number) => void;
  rating: number;
}
