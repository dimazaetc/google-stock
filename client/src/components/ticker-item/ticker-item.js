import FullName from "../full-name";
import "./ticker-item.css";
const TickerItem = ({
  ticker,
  price,
  change,
  change_percent,
  onDoubleClick,
}) => {
  return (
    <div onDoubleClick={onDoubleClick} name={ticker} className="tikers_wrapper">
      <div>
        <FullName name={ticker} />
      </div>
      <div>{price}</div>
      <div>
        {change}/{change_percent}%
      </div>
    </div>
  );
};
export default TickerItem;
