import axios from 'axios';

import routes from './keys';

export default async () => {
  // perform any async loading of page data here
  const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts');

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
    },
    {
      path: routes['404'],
      component: 'src/pages/404/404'
    }
  ];
};
