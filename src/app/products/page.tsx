import { getProducts } from "@/services/products";
import Link from "next/link";
import styles from "./page.module.css";

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();
  // 서버 파일(DB)에 있는 제품의 리스트를 일거와서 그것을 보여주기

  const res = await fetch("https://meowfacts.herokuapp.com/", {
    next: { revalidate: 3 }, // 0일 때는 SSR로 동작
    // cache: "no-store", // 캐시를 사용하지 않겠다. -> SSR,
  });

  const data = await res.json();

  const factText = data.data[0];
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              <Link href={`products/${product.id}`}>{product.name}</Link>
            </li>
          );
        })}
      </ul>
      <article className={styles.article}>{factText}</article>
    </>
  );
}
