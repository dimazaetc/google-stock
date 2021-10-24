import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import { getTickers, getToCart } from "../../redux/actions/actions";
import PropTypes from "prop-types";
import Timer from "../timer";
import onDelete from "../functions/onDelete";
import toggleColor from "../functions/toggleColor";
import TickerItem from "../ticker-item";
import WishlistItem from "../wishlist-item";
import Heart from "./heart.png";
import Loader from "../loader";
import "./all-tickers.css";

function AllTikers() {
  const tikersWrapper = useSelector((state) => state.tickers.tickers);
  const selectedTickets = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  let allList = tikersWrapper.tickersData;
  const [tickersList, setTickersList] = useState(allList);
  let tikersWrappers = document.querySelectorAll(
    ".tickers_box > .tikers_wrapper"
  );
  let wishlistWrapperColors = document.querySelectorAll(
    ".wishlist_wrapper_colors > .cart_wrapper"
  );

  const [select, setSelect] = useState([]);

  useEffect(() => {
    dispatch(getTickers());
  }, [dispatch]);

  useEffect(() => {
    setTickersList(allList);

    tickersList && toggleColor(allList, tikersWrappers, tickersList);
  }, [allList]); // eslint-disable-line

  useEffect(() => {
    const res = [];
    for (let i = 0; i < select.length; i++) {
      const result = allList.filter((item) => item.ticker === select[i].ticker);
      res.push(...result);
      toggleColor(res, wishlistWrapperColors, select);
    }

    setSelect(res);
  }, [tickersList]); // eslint-disable-line
  const selectCart = (item) => {
    const result = select.find((ticker) => ticker.ticker === item.ticker);

    result ? setSelect([...select]) : setSelect([...select, item]);
  };

  useEffect(() => {
    dispatch(getToCart(select));
  }, [dispatch, select]);

  const listItemCart =
    selectedTickets == null ? (
      <Loader />
    ) : (
      selectedTickets.map((cart, index) => {
        const { ticker, exchange, price } = cart;
        return (
          <WishlistItem
            key={ticker}
            ticker={ticker}
            price={price}
            index={index}
            exchange={exchange}
            onClick={() => onDelete(cart, index, select, setSelect)}
          />
        );
      })
    );

  const listItem =
    tickersList == null ? (
      <Loader />
    ) : (
      tickersList.map((tick) => {
        const { ticker, price, change, change_percent } = tick;
        return (
          <TickerItem
            onDoubleClick={() => selectCart(tick)}
            ticker={ticker}
            price={price}
            change={change}
            change_percent={change_percent}
            key={ticker}
          />
        );
      })
    );

  return (
    <Container className="all_tickers">
      <Row>
        <Col>
          <div className="title_heart_wrapper">
            <h2> My Wishlist</h2>
            <img className="heart" src={Heart} alt="heart" />
          </div>
          <div className="cart_item_wrapper">
            {listItemCart.length === 0 ? (
              <h3 className="info_wishlist">
                Add item to wishlist by double click
              </h3>
            ) : (
              <div className="wishlist_wrapper_colors">{listItemCart}</div>
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
          <Timer />

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
