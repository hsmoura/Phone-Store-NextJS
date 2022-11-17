import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import AppContext from "../../store/AppContext";
import { useContext, useEffect } from "react";

const HeaderCartButton = (props) => {
  const ctx = useContext(AppContext);

  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{ctx.cart}</span>
    </button>
  );
};

export default HeaderCartButton;
