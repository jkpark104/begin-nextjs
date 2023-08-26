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

export default function PantsPage({ params }: Props) {
  if (params.slug === "nothing") {
    notFound();
  }

  return <h1>{params.slug} Page</h1>;
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];

  return products.map((slug) => ({ slug }));
}
