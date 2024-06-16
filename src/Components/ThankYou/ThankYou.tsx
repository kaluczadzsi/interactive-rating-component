import { ThankYouProps } from "./types";

const ThankYou = ({ rating }: ThankYouProps) => {
  return (
    <div className="thank-you">
      <img src="/images/illustration-thank-you.svg" alt="thank you image" />
      <p>You selected {rating} out of 5</p>
      <h1>Thank You!</h1>
      <p>
        We appreciate you taking the time to give rating. If you ever need more
        support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYou;
