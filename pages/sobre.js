import React from 'react';
import SobreScreen from '../src/components/screens/SobreScreen';
import WebsitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export async function getStaticProps() {
  const repositories = await fetch('https://api.github.com/users/bebusse/repos').then(async (res) => {
    const response = await res.json();
    return response;
  });
  return {
    props: {
      repositories,
    },
  };
}

function SobrePage(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SobreScreen {...props} />
  );
}

export default WebsitePageHOC(SobrePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre Mim',
    },
    menuProps: {
      display: true,
    },
    pageBoxProps: {
    },
  },
});
