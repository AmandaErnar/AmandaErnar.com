import { get_post } from "$lib/script.js";
import { json } from "@sveltejs/kit";

export const GET = async () => {
  const allPosts = await get_post();

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });

  return json(sortedPosts);
};
