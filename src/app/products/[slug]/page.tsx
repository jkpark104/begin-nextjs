import { getProduct, getProducts } from "@/services/products";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `${params.slug} Page`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그것을 보여줌

  if (!product) {
    notFound();
  }

  return <h1>{product.name} Page</h1>;
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해둘 것
  const products = await getProducts();

  return products.map(({ id }) => ({ slug: id }));
}
