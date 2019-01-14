const routes = {
  Landing: {
    path: `/`
  },
  About: {
    path: `/about`
  },
  Blog: {
    path: `/blog`,
    Post: {
      path: `/post`
    }
  },
  '404': {
    path: `/404`
  }
};

function iterate(obj, data) {
  Object.keys(obj).forEach(d => {
    if (typeof obj[d] === 'object') {
      iterate(obj[d], data);
      data[d] = obj[d].path;
    }
  });
}

const routeKeys = (() => {
  const data = {};
  iterate(routes, data);
  return data;
})();

export default routeKeys;
