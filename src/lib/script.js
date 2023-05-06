export const get_post = async () => {
  const post = Object.entries(import.meta.glob("/src/routes/writing/*.md"));

  return await Promise.all(
    post.map(async ([path, resolver]) => {
      const { metadata } = await resolver();

      return {
        meta: metadata,
        path: path.slice(11, -3),
      };
    })
  );
};
