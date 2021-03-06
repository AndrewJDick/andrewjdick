import React from 'react';
import { onRenderBody as renderReactHelmet } from 'gatsby-plugin-react-helmet/gatsby-ssr';
import 'prismjs/themes/prism-tomorrow.css';
import { Theme } from './src/components/Theme';
import { Layout } from './src/components/Layout';
import './src/styles/global.css';

export const wrapRootElement = ({ element }) => <Theme>{element}</Theme>;

export const wrapPageElement = ({ element }) => {
  const { location, data } = element.props;

  return (
    <Layout location={location} data={data}>
      {element}
    </Layout>
  );
};

export const onRenderBody = (api, options) => {
  renderReactHelmet(api, options);

  api.setPreBodyComponents([
    <noscript key="noscript">
      Your browser does not support JavaScript!
    </noscript>,
  ]);
};
