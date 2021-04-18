import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default function SEO({ headTitle, description, image }) {
  const baseTitle = 'Meu Portfolio | Bernardo Busse';
  const baseDescription = 'Meu Portfolio Desenvolvido Durante o Bootcamp Alura JAMStack com React + Next.js';
  const baseImage = 'https://portfolio-bernardo.vercel.app/img/cover-background.jpg';
  const hasHeadTitle = Boolean(headTitle);
  const mainTitle = hasHeadTitle ? `${headTitle} | ${baseTitle}` : `${baseTitle}`;
  const mainDescription = description || baseDescription;
  const mainImage = image || baseImage;
  const url = 'https://portfolio-bernardo.vercel.app/';
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{mainTitle}</title>
      <meta name="title" content={mainTitle} />
      <meta name="description" content={mainDescription} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={mainTitle} />
      <meta property="og:description" content={mainDescription} />
      <meta property="og:image" content={mainImage} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={mainTitle} />
      <meta property="twitter:description" content={mainDescription} />
      <meta property="twitter:image" content={mainImage} />
    </Head>
  );
}

SEO.propTypes = {
  headTitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

SEO.defaultProps = {
  headTitle: '',
  description: '',
  image: '',
};
