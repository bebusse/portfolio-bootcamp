/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../commons/Modal';
import Box from '../../foundation/layout/Box';
import FormContactUs from '../../patterns/FormContactUs';
import Footer from '../../commons/Footer';
import SEO from '../../commons/SEO';
import Header from '../../commons/Header';
import Cover from '../../commons/Cover';

export const WebsitePageContext = React.createContext({
  toggleContactModal: () => {},
});

export default function WebsitePageWrapper({
  children,
  coverProps,
  seoProps,
  menuProps,
  pageBoxProps,
}) {
  const [isContactModalOpen, setContactModalState] = React.useState(false);
  return (
    <WebsitePageContext.Provider
      value={{
        toggleContactModal: () => {
          setContactModalState(!isContactModalOpen);
        },
      }}
    >
      <SEO {...seoProps} />
      <Box
        flex="1"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="space-between"
        {...pageBoxProps}
      >
        {coverProps.display && (
          <Cover />
        )}

        <Header
          onOpenContactModal={() => setContactModalState(true)}
          {...menuProps}
        />
        <Modal
          isOpen={isContactModalOpen}
          onClose={() => setContactModalState(false)}
        >
          {(propsModal) => <FormContactUs propsModal={propsModal} />}
        </Modal>
        {children}

        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  coverProps: {
    display: true,
  },
  menuProps: {
    display: true,
  },
  pageBoxProps: {},
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  coverProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
