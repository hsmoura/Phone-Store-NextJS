import { useRouter } from "next/router";
import Layout from "../components/layout/Layout";
import ProductView from "../components/productPage/ProductView";
import AppContext from "../store/AppContext";
import { useContext, useState, useEffect } from "react";

export default function DetailPage() {
  const ctx = useContext(AppContext);
  const router = useRouter();
  const id = router.query.prodId;

  const [prodDetails, setProdDetails] = useState({});
  const [fetched, setFetched] = useState(false);
  async function fetchProdDetails() {
    console.log("FETCH");
    await fetch(`https://front-test-api.herokuapp.com/api/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProdDetails(data);
        setFetched(true);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchProdDetails();
  }, [fetched]);

  return (
    <Layout pname={prodDetails.model}>
      <ProductView id={ctx.selectedPhone} prodDetails={prodDetails} />
    </Layout>
  );
}
