export const fetchMarkdownPosts = async () => {
  const post = Object.entries(import.meta.glob('/src/routes/writing/*.md'))
  
  const allPosts = await Promise.all(
    post.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(11, -3)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  return allPosts
}
