import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

export default function SobreScreen({ repositories }) {
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
          Sobre
        </Text>
        <Box
          textAlign="center"
        >
          <Image
            src="/img/profile.jpg"
            width={326}
            height={326}
            layout="fixed"
          />
        </Box>
        <Box
          width="70%"
          textAlign="center"
          margin="0 auto"
        >
          <Text
            tag="p"
            variant="text"
          >
            Who would bear, that unworthy to sleep off traveller beary from when we
            know no troubler their thous ressor&apos;s wrong, to oth there&apos;s contumely,
            the what the mind makes, when we know no momethe arms mortal shocks turns
            thing a sea of that merit of time, there&apos;s thus coment wish&apos;d. To beart-ache
            shuffer resolution is quietus fortal shocks thought, and that merit of
            outrageousand the doth and long, that pith and native spurns of trageous
            contumely, this makes us fortune, to sleep of of disprises country.
          </Text>
        </Box>
        <Box
          width="50%"
          margin="0 auto"
        >
          <Text
            tag="h2"
            variant="h2"
            textAlign="center"
          >
            Meus Repositórios
          </Text>
          <ol>
            {repositories.map((repository) => (
              <li>
                <Text
                  tag="span"
                  variant="h4"
                >
                  {repository.name}
                </Text>
                <Text
                  tag="p"
                  variant="text"
                >
                  <Text tag="a" variant="text" href={repository.html_url}>
                    {repository.html_url}
                  </Text>
                </Text>
              </li>
            ))}
          </ol>
        </Box>
      </Grid.Container>

    </Box>
  );
}

SobreScreen.defaultProps = {
  repositories: [],
};

SobreScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  repositories: PropTypes.array,
};
