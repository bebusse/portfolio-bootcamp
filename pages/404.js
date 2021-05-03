import NotFoundScreen from '../src/components/screens/NotFoundScreen';
import WebsitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export default WebsitePageHOC(NotFoundScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Página Não Encontrada',
    },
    menuProps: {
      display: true,
    },
    pageBoxProps: {
    },
  },
});
