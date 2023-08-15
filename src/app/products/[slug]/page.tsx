type Props = {
  params: {
    slug: string;
  };
};

export default function PantsPage({ params }: Props) {
  return <h1>{params.slug} Page</h1>;
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];

  return products.map((slug) => ({ slug }));
}
