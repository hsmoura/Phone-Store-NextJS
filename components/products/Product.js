import classes from "./Product.module.css";
import Link from "next/link";

export default function Product(props) {
  return (
    <div className={classes.product} id="productm">
      <Link href={props.phone.id}>
        <div className={classes.prodcont}>
          <img src={props.phone.imgUrl} alt="" />
          {!props.phone.price ? (
            <p>
              Model: {props.phone.model}
              <br></br>Brand: {props.phone.brand}
              <br></br>Out of stock
            </p>
          ) : (
            <p>
              Model: {props.phone.model}
              <br></br>Brand: {props.phone.brand}
              <br></br>Price: {props.phone.price}$
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}
