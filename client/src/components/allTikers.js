import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Col, Row, Button } from "react-bootstrap";
import { getTickers, getToCart } from "../redux/actions";
import PropTypes from "prop-types";

import toggleColor from "./toggleColor";
import heart from "../components/componentsImg/heart.png";
import Loader from "./loader";
import Healper from "./healper";
import "../index.css";

function AllTikers() {
  const tikersWrapper = useSelector((state) => state.tickers.tickers);
  const SelectedTickets = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const allList = tikersWrapper.tickersData;
  const [tickersList, setTickersList] = useState(allList);
  let tikersWrappers = document.querySelectorAll(
    ".tickers_box > .tikers_wrapper"
  );

  useEffect(() => {
    dispatch(getTickers());
  }, [dispatch]);

  useEffect(() => {
    setTickersList(allList);
    tickersList && toggleColor(allList, tikersWrappers, tickersList);
  }, [allList]); // eslint-disable-line

  const [select, setSelect] = useState([]);

  const selectCart = (item, index) => {
    const result = select.find((ticker) => ticker.ticker === item.ticker);
    result ? setSelect([...select]) : setSelect([...select, item]);
  };
  const onDelete = (item, index) => {
    const newArray = [...select.slice(0, index), ...select.slice(index + 1)];
    setSelect(newArray);
  };
  useEffect(() => {
    dispatch(getToCart(select));
  }, [dispatch, select]);
  const listItemCart =
    SelectedTickets == null ? (
      <Loader />
    ) : (
      SelectedTickets.map((cart, index) => {
        return (
          <div className="cart_wrapper" key={cart.ticker}>
            <div className="wishlist_ticker">
              {index + 1}.{cart.ticker}({cart.exchange})
            </div>
            <Button onClick={() => onDelete(cart, index)} variant="danger">
              Delete
            </Button>
          </div>
        );
      })
    );

  const listItem =
    tickersList == null ? (
      <Loader />
    ) : (
      tickersList.map((tick, index) => {
        const { ticker, price, change, change_percent } = tick;
        return (
          <div
            onDoubleClick={() => selectCart(tick, index)}
            name={ticker}
            className="tikers_wrapper"
            key={ticker}
          >
            <div>
              <Healper name={ticker} />
            </div>
            <div>{price}</div>
            <div>
              {change}/{change_percent}%
            </div>
          </div>
        );
      })
    );
  console.log(allList);
  return (
    <Container className="all_tickers">
      <Row>
        <Col>
          <div className="title_heart_wrapper">
            <h2> My Wishlist</h2>
            <img className="heart" src={heart} alt="heart" />
          </div>
          <div className="cart_item_wrapper">
            {listItemCart.length === 0 ? (
              <h3 className="info_wishlist">
                Add item to wishlist by double click
              </h3>
            ) : (
              listItemCart
            )}
          </div>
        </Col>
        <Col>
          <h2 className="tickers_title">
            <span className="blue">G</span>
            <span className="red">o</span>
            <span className="yellow">o</span>
            <span className="blue">g</span>
            <span className="green">l</span>
            <span className="red">e</span> Finance
          </h2>

          <div className="tickers_box">{listItem}</div>
        </Col>
      </Row>
    </Container>
  );
}
AllTikers.propTypes = {
  ticker: PropTypes.string,
  price: PropTypes.number,
  change: PropTypes.number,
  change_percent: PropTypes.number,
};
export default AllTikers;

AllTikers.defaultProps = {
  tikersWrapper: {},
  SelectedTickets: {},
  allList: [],
};
