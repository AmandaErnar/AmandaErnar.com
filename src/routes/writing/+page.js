import get_post from "$lib/script.js"

export const load = async ({ fetch }) => {
  const post = await get_post(fetch);

  return {
    post,
  };
};
