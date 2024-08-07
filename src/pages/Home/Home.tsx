import { Hero } from "../../components/ui/Hero";
import { useState } from "react";
import styles from "./Home.module.css";
import { CardProduct } from "../../components/ui/CardProduct";
import { getProducts } from "../../service";
import { Toaster } from 'sonner';
import { useQuery } from "react-query";

const Home = () => {

  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery(
    ["products", page],
    () => getProducts(page),
    {keepPreviousData: true}
  );

  return (
    <>
      <Hero />
      <Toaster richColors={true} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      <div className={styles.container}>
        {data?.map((product) => (
          <CardProduct key={product.tail} product={product} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <button
          className={styles.paginationButton}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          previous page
        </button>
        <div className={styles.paginationActive}>
          <span>{page}</span>
        </div>
        <button
          className={styles.paginationButton}
          onClick={() => setPage(page + 1)}
        >
          next page
        </button>
      </div>
    </>
  )
}

export default Home