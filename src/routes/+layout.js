export const prerender = true;

export const load = ({ url }) => {
  return {
    path: url.pathname,
  };
};
