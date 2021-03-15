import React from 'react';
import Footer from '../src/components/commons/Footer';
import Box from '../src/components/foundation/layout/Box/index';
import Header from '../src/components/commons/Header';
import Cover from '../src/components/commons/Cover';
import Projects from '../src/components/patterns/Projects';
import Modal from '../src/components/commons/Modal';
// import Button from '../src/components/commons/Button';
import FormContactUs from '../src/components/patterns/FormContactUs';

export default function Home() {
  const [isContactModalOpen, setContactModalState] = React.useState(false);
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Cover />
      <Header
        onOpenContactModal={() => setContactModalState(true)}
      />
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setContactModalState(false)}
      >
        {(propsModal) => <FormContactUs propsModal={propsModal} />}
      </Modal>
      <Projects />

      <Footer />
    </Box>
  );
}
