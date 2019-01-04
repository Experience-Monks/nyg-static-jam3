import './env.config';
import React from 'react';
import ImageminPlugin from 'imagemin-webpack-plugin';

import { siteRoot } from './src/config';
import getStaticRoutes from './src/routes/get-static-routes';
import Favicons from './src/components/Favicons/Favicons';

export default {
  paths: {
    src: 'src', // The source directory. Must include an index.js entry file
    dist: 'build', // The production output directory
    public: 'public' // The public directory (files copied to dist during build)
  },
  siteRoot,
  stagingSiteRoot: siteRoot,
  basePath: '/',
  getRoutes: getStaticRoutes,
  Document: ({ Html, Head, Body, children, routeInfo, siteData, renderMeta }) => {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="referrer" content="no-referrer" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <Favicons />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-0000000');`
            }}
          />
        </Head>
        <Body>
          <noscript>
            <iframe
              title="gtm"
              width="0"
              height="0"
              style={{ display: 'none', visibility: 'hidden' }}
              src="https://www.googletagmanager.com/ns.html?id=GTM-0000000"
            />
          </noscript>
          {children}
        </Body>
      </Html>
    );
  },

  webpack: (config, { stage }) => {

    if (stage === 'prod') {
      config.plugins.push(
        new ImageminPlugin({
          test: /\.(jpe?g|gif|svg)$/i
        })
      );
      config.plugins.push(
        new ImageminPlugin({
          test: /\.png$/i,
          pngquant: {
            quality: '78-98',
            verbose: true
          }
        })
      );
    }

    return config;
  },
  bundleAnalyzer: Boolean(process.env.ANALYZE)
};
