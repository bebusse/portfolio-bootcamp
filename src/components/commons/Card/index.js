import React from 'react';
import Image from 'next/image';
import Text from '../../foundation/Text';
import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';

function CardTitle({ children }) {
  return (
    <Text tag="p" variant="h3">
      {children}
    </Text>
  );
}

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
      <cardWrapper>
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
      </cardWrapper>
    </Grid.Container>
  );
}

function CardDefault({ imageSource, title }) {
  return (
    <Grid.Col
      offset={{ xs: 0, md: 0 }}
      value={{ xs: 12, md: 4 }}
      textAlign="center"
    >
      <cardWrapper>
        <CardImage imageSource={imageSource} />
        <CardTitle>
          {title}
        </CardTitle>
      </cardWrapper>
    </Grid.Col>
  );
}

export default function Card(portfolioItem) {
  if (portfolioItem.featured) {
    return (
      <CardFeatured
        imageSource={portfolioItem.imageSource}
        title={portfolioItem.title}
        description={portfolioItem.description}
      />
    );
  }
  return (
    <CardDefault
      imageSource={portfolioItem.imageSource}
      title={portfolioItem.title}
    />
  );
}
