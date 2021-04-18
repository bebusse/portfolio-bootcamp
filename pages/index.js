import HomeScreen from '../src/components/screens/HomeScreen';
import WebsitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export default WebsitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    coverProps: {
      display: true,
    },
    menuProps: {
      display: true,
    },
    pageBoxProps: {
    },
  },
});
