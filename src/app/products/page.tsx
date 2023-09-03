import MeowArticle from "@/components/MeowArticle";
import { getProducts } from "@/services/products";
import Link from "next/link";

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();
  // 서버 파일(DB)에 있는 제품의 리스트를 일거와서 그것을 보여주기

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
      <MeowArticle />
    </>
  );
}
