import { Button } from "react-bootstrap";
import "./wishlist.css";

const WishlistItem = ({ onClick, ticker, exchange, index, price }) => {
  return (
    <div className="cart_wrapper" key={ticker}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <div className="wishlist_ticker">
          {index + 1}.{ticker}({exchange})
        </div>
        <div>Price: {price}</div>
      </div>
      <Button onClick={onClick} variant="danger">
        Delete
      </Button>
    </div>
  );
};

export default WishlistItem;
