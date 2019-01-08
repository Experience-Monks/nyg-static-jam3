import axios from 'axios';

import routes from './keys';

export default async () => {
  // perform any async loading of page data here
  const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts');

  //  Tip: React Static also automatically generates routes for folders/files in pages,
  //  i.e. 404 in pages will have route /404
  return [
    {
      path: routes.Landing,
      component: 'src/pages/Landing/Landing'
    },
    {
      path: routes.About,
      component: 'src/pages/About/About'
    },
    {
      path: routes.Blog,
      component: 'src/pages/Blog/Blog',
      getData: () => ({
        posts
      }),
      children: posts.map(post => ({
        path: `${routes.Post}/${post.id}`,
        component: 'src/components/Post/Post',
        getData: () => ({
          post
        })
      }))
    }
  ];
};
