import getStaticRoutes from './src/routes/get-static-routes';

export default {
  getSiteData: () => ({
    title: 'React Static'
  }),
  getRoutes: getStaticRoutes,
  plugins: ['react-static-plugin-sass', 'react-static-plugin-react-router']
};
