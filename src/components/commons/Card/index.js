/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Image from 'next/image';
import { PropTypes } from 'prop-types';
import Text from '../../foundation/Text';
import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import CardWrapper from './style/CardWrapper';

function CardTitle({ children, href, ...props }) {
  return (
    <Box margin="0 0 10px 0" {...props}>
      <Text variant="h3" href={href}>
        {children}
      </Text>
    </Box>
  );
}

CardTitle.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};

CardTitle.defaultProps = {
  children: '',
  href: '',
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

function CardImage({ imageSource, alt }) {
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
        alt={alt}
      />
    </Box>
  );
}

CardImage.propTypes = {
  imageSource: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

CardImage.defaultProps = {
  alt: '',
};

function CardFeatured({
  imageSource,
  title,
  description,
  url,
}) {
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
          >
            <Text href={url}>
              <Image
                src={imageSource}
                width={680}
                height={320}
                alt={title}
              />
            </Text>
          </Grid.Col>
          <Grid.Col
            offset={{ xs: 0, md: 0 }}
            value={{ xs: 12, md: 4 }}
            marginBottom={{
              xs: '0px',
              md: '0px',
            }}
          >
            <CardTitle href={url} textAlign="left">
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
  url: PropTypes.string,
};

CardFeatured.defaultProps = {
  description: '',
  url: '/',
};

function CardDefault({ imageSource, title, url }) {
  return (
    <Grid.Col
      offset={{ xs: 0, md: 0 }}
      value={{ xs: 12, md: 4 }}
    >
      <CardWrapper>
        <Text href={url}>
          <CardImage imageSource={imageSource} alt={title} />
        </Text>
        <CardTitle href={url} textAlign="center">
          {title}
        </CardTitle>
      </CardWrapper>
    </Grid.Col>
  );
}

CardDefault.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default function Card(portfolioItem, rootUrl) {
  if (portfolioItem.featured) {
    return (
      <CardFeatured
        key={portfolioItem.title}
        imageSource={portfolioItem.imageSource}
        title={portfolioItem.title}
        description={portfolioItem.summary}
        url={rootUrl + portfolioItem.alias}
      />
    );
  }
  return (
    <CardDefault
      key={portfolioItem.title}
      imageSource={portfolioItem.imageSource}
      title={portfolioItem.title}
      url={rootUrl + portfolioItem.alias}
    />
  );
}
