import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import ProductList from "../components/products/ProductList";
import Search from "../components/search/Search";

export default function HomePage() {
  return (
    <Layout>
      <Search />
      <ProductList />
    </Layout>
  );
}
