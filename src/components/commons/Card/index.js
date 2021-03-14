import React from 'react';
import Image from 'next/image';
import { PropTypes } from 'prop-types';
import Text from '../../foundation/Text';
import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import CardWrapper from './style/CardWrapper';

function CardTitle({ children }) {
  return (
    <Text tag="p" variant="h3">
      {children}
    </Text>
  );
}

CardTitle.propTypes = {
  children: PropTypes.node,
};

CardTitle.defaultProps = {
  children: '',
};

function CardText({ children }) {
  return (
    <Text
      tag="p"
      variant="text"
      display={{
        xs: 'none',
        md: 'initial',
      }}
    >
      {children}
    </Text>
  );
}

CardText.propTypes = {
  children: PropTypes.node,
};

CardText.defaultProps = {
  children: '',
};

function CardImage({ imageSource }) {
  return (
    <Box
      maxHeight={{
        xs: '177px',
        md: 'none',
      }}
      overflow={{
        xs: 'hidden',
        md: 'initial',
      }}
    >
      <Image
        src={imageSource}
        width={287}
        height={390}
        layouy="contain"
      />
    </Box>
  );
}

CardImage.propTypes = {
  imageSource: PropTypes.string.isRequired,
};

function CardFeatured({ imageSource, title, description }) {
  return (
    <Grid.Container
      marginTop={{
        xs: '10px',
        md: '20px',
      }}
      marginBottom={{
        xs: '10px',
        md: '20px',
      }}
    >
      <CardWrapper>
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 0 }}
            value={{ xs: 12, md: 8 }}
            textAlign="center"
          >
            <Image
              src={imageSource}
              width={680}
              height={320}
            />
          </Grid.Col>
          <Grid.Col
            offset={{ xs: 0, md: 0 }}
            value={{ xs: 12, md: 4 }}
            marginBottom={{
              xs: '0px',
              md: '0px',
            }}
          >
            <CardTitle>
              {title}
            </CardTitle>
            <CardText>
              {description}
            </CardText>
          </Grid.Col>
        </Grid.Row>
      </CardWrapper>
    </Grid.Container>
  );
}

CardFeatured.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

CardFeatured.defaultProps = {
  description: '',
};

function CardDefault({ imageSource, title }) {
  return (
    <Grid.Col
      offset={{ xs: 0, md: 0 }}
      value={{ xs: 12, md: 4 }}
      textAlign="center"
    >
      <CardWrapper>
        <CardImage imageSource={imageSource} />
        <CardTitle>
          {title}
        </CardTitle>
      </CardWrapper>
    </Grid.Col>
  );
}

CardDefault.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default function Card(portfolioItem) {
  if (portfolioItem.featured) {
    return (
      <CardFeatured
        key={portfolioItem.title}
        imageSource={portfolioItem.imageSource}
        title={portfolioItem.title}
        description={portfolioItem.description}
      />
    );
  }
  return (
    <CardDefault
      key={portfolioItem.title}
      imageSource={portfolioItem.imageSource}
      title={portfolioItem.title}
    />
  );
}
