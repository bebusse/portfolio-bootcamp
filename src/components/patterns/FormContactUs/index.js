import React from 'react';
import PropTypes from 'prop-types';
// import { validate } from 'validate.js';
import { Lottie } from '@crello/react-lottie';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import Button from '../../commons/Button/index';
import TextField from '../../forms/TextField';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);
  const [contactInfo, setContactInfo] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  // const userDTO = {
  //   name: contactInfo.name,
  //   email: contactInfo.email,
  //   message: contactInfo.message,
  // };

  function submitData() {
    const randomNumber = Math.floor((Math.random() * 100) + 1);
    if (randomNumber % 2 === 0) {
      setSubmissionStatus(formStates.DONE);
      return true;
    }
    setSubmissionStatus(formStates.ERROR);
    return false;
  }

  function validateEmailField(email) {
    const emailReg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (emailReg.test(email)) {
      setIsEmailInvalid(false);
      return false;
    }
    setIsEmailInvalid(true);
    return true;
  }

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setContactInfo({
      ...contactInfo,
      [fieldName]: event.target.value,
    });
    if (fieldName === 'email') {
      validateEmailField(event.target.value);
    }
  }

  function validateForm() {
    const areFieldsEmpty = contactInfo.name.length === 0 || contactInfo.email.length === 0
    || contactInfo.message.length === 0;
    return (areFieldsEmpty || isEmailInvalid);
  }

  const isFormInvalid = validateForm();

  return (
    <form
      style={{
        position: 'relative',
      }}
      onSubmit={(event) => {
        event.preventDefault();
        setIsFormSubmitted(true);
        // submitData(userDTO);
        submitData();
      }}
    >
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
        textAlign="center"
      >
        Enviar uma mensagem
      </Text>

      {isFormSubmitted && submissionStatus === formStates.DONE && (
      <Box
        textAlign="center"
      >
        <Text
          tag="p"
          marginBottom={0}
        >
          Deu tudo certo! Excellent!!
        </Text>
        <Lottie
          width="100px"
          height="100px"
          style={{
            margin: '0 auto 10px auto',
          }}
          className="lottie-container basic"
          config={{ animationData: successAnimation, loop: false, autoplay: true }}
        />
      </Box>
      )}

      {isFormSubmitted && submissionStatus === formStates.ERROR && (
      <Box
        textAlign="center"
      >
        <Text
          tag="p"
          marginBottom={0}
        >
          Deu tudo Errado :(
        </Text>
        <Lottie
          width="100px"
          height="100px"
          style={{
            margin: '10px auto',
          }}
          className="lottie-container basic"
          config={{ animationData: errorAnimation, loop: false, autoplay: true }}
        />
      </Box>
      )}

      <div>
        <p>Nome</p>
        <TextField
          name="name"
          placeholder="Nome"
          value={contactInfo.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Email</p>
        <TextField
          name="email"
          placeholder="johndoe@email.com"
          value={contactInfo.email}
          onChange={handleChange}
          isInvalid={isEmailInvalid}
        />
        {isEmailInvalid && (
        <Text
          tag="p"
          marginTop="-10px"
          isInvalid={isEmailInvalid}
        >
          Esse email não é valido.
        </Text>
        )}
      </div>
      <div>
        <p>Mensagem</p>
        <TextField
          name="message"
          placeholder="Type your Message"
          value={contactInfo.message}
          onChange={handleChange}
        />
      </div>
      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: 'auto',
          md: 'initial',
        }}
        fullWidth
        disabled={isFormInvalid}
      >
        Cadastrar
      </Button>
    </form>
  );
}

export default function FormContactUs({ propsModal }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="center"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '45px',
          }}
          backgroundColor="white"
          style={{
            position: 'relative',
          }}
                    // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsModal}
        >

          <Box
            position="absolute"
            top={{ xs: '10px', md: '30px' }}
            right={{ xs: '10px', md: '30px' }}
            zIndex="100000"
          >
            <Button data-modal-close-button variant="smallestException" ghost><i className="icofont-close icofont-2x" /></Button>
          </Box>
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

FormContactUs.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  propsModal: PropTypes.object.isRequired,
};
