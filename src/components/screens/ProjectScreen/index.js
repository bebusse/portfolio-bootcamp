import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

export default function ProjectScreen({ projectProps }) {
  return (
    <Box
      flex="1 1 auto"
      display="flex"
      flexDirection="column"
      flexGrow="1"
      alignItems="center"
      justifyContent="start"
    >
      <Grid.Container
        padding="10px 20px"
      >
        <Text
          tag="h1"
          variant="h1"
          textAlign="center"
        >
          {projectProps.title}
        </Text>

        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 0 }}
            value={{ xs: 12, md: 5 }}
            textAlign="center"
            objectFit="contain"
          >
            <Image
              src={projectProps.imageSource}
              width={680}
              height={925}
            />
          </Grid.Col>
          <Grid.Col
            offset={{ xs: 0, md: 0 }}
            value={{ xs: 12, md: 7 }}
            textAlign="center"
          >

            <Text
              tag="p"
              variant="text"
            >
              {projectProps.description}
            </Text>

            <Text
              tag="h3"
              variant="h3"
            >
              Visite o site
            </Text>

            <Text tag="a" variant="text" href={projectProps.url}>
              {projectProps.url}
            </Text>
          </Grid.Col>

        </Grid.Row>

      </Grid.Container>

    </Box>
  );
}

ProjectScreen.defaultProps = {
  projectProps: {
    alias: '',
    imageSource: '',
    title: '',
    description: '',
    url: '',
  },
};

ProjectScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  projectProps: PropTypes.shape({
    alias: PropTypes.string,
    imageSource: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  }),
};
