const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const isNode = typeof window === 'undefined';
const isBrowser = !isNode;
const siteRoot = process.env.SITE_ROOT;

export { isDev, isProd, isNode, isBrowser, siteRoot };
