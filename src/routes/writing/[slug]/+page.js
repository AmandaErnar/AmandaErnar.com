export async function load({ params }) {
  const post = await import(`../../../writing/${params.slug}.md`);

  return {
    ...post.metadata,
    Content: post.default,
  };
}
