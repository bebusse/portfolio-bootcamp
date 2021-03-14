import React from 'react';
import Card from '../../commons/Card';
import Grid from '../../foundation/layout/Grid';
import ProjectsWrapper from './style/ProjectsWrapper';
import SectionTitle from '../../commons/SectionTitle';

export default function Projects() {
  const portFolioItems = [
    {
      imageSource: '/img/profile-featured.png',
      title: 'Projeto em Destaque',
      description: 'Projeto 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
      featured: true,
    },
    {
      imageSource: '/img/profile-image.png',
      title: 'Projeto 2',
      description: 'Projeto 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
      featured: false,
    },
    {
      imageSource: '/img/profile-image.png',
      title: 'Projeto 3',
      description: 'Projeto 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
      featured: false,
    },
    {
      imageSource: '/img/profile-image.png',
      title: 'Projeto 4',
      description: 'Projeto 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
      featured: false,
    },
  ];
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ProjectsWrapper>
      <SectionTitle />
      <Grid.Container>
        <Grid.Row>
          {portFolioItems.map((item) => (Card(item)))}
        </Grid.Row>
      </Grid.Container>
    </ProjectsWrapper>
  );
}
