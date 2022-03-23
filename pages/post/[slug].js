import SanityService from '../services/SanityService';

function PostAll({ slug, post }) {
  return (
    <div>
      <h1>Post : {slug}</h1>
    </div>
  );
}

export default PostAll;

export async function getStaticPaths() {
  const posts = await new SanityService().getPosts();

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const posts = await new SanityService().getPosts();

  const post = posts.find((p) => p.slug === slug);

  return {
    props: {
      slug,
      post,
    },
  };
}
