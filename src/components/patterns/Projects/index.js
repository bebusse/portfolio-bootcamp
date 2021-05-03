import React from 'react';
import Card from '../../commons/Card';
import Grid from '../../foundation/layout/Grid';
import ProjectsWrapper from './style/ProjectsWrapper';
import SectionTitle from '../../commons/SectionTitle';

export default function Projects() {
  const portFolioItems = [
    {
      imageSource: '/img/projects/profile-featured.png',
      alias: 'projeto-em-destaque',
      title: 'Projeto em Destaque',
      summary: 'Sed ut ipsum sit amet ligula elementum faucibus. Quisque non faucibus felis. Sed efficitur libero diam, tempus interdum sapien scelerisque et.',
      description: 'Sed ut ipsum sit amet ligula elementum faucibus. Quisque non faucibus felis. Sed efficitur libero diam, tempus interdum sapien scelerisque et. Quisque eget accumsan tellus, a dictum elit. Nunc pretium mi eros, sit amet scelerisque sem laoreet a. Aenean tempor nec dui a tincidunt. Pellentesque accumsan bibendum est eget auctor. Donec suscipit nibh nec tellus sagittis luctus. Suspendisse id ante pharetra, elementum turpis sit amet, ornare eros. Curabitur nunc arcu, aliquet eget ante mattis, viverra condimentum diam. Cras a laoreet libero. Sed vel lacinia nunc. Vivamus et molestie eros. Suspendisse nec diam sagittis elit bibendum ultricies. Sed imperdiet risus quis est ultrices, a scelerisque neque volutpat.',
      featured: true,
      url: 'https://instalura-base.bebusse.vercel.app/',
    },
    {
      imageSource: '/img/projects/profile-image.png',
      alias: 'projeto-2',
      title: 'Projeto 2',
      summary: 'Nam sit amet posuere ligula. Phasellus vel dui augue. Integer ornare diam at massa congue, dictum sodales dolor sollicitudin.',
      description: 'Nam sit amet posuere ligula. Phasellus vel dui augue. Integer ornare diam at massa congue, dictum sodales dolor sollicitudin. Duis ultricies justo ut cursus vestibulum. Phasellus aliquet quam dui, nec convallis lorem ullamcorper ac. Sed tincidunt iaculis hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut sollicitudin lacus ut tristique pretium. Mauris vitae diam interdum, aliquet ligula ut, imperdiet augue. Aliquam vel libero rhoncus, eleifend arcu et, volutpat massa. Praesent et pharetra augue. Mauris pretium ut urna in ullamcorper. Morbi in diam ut ipsum bibendum molestie a at augue. In venenatis vulputate neque, at accumsan justo volutpat sit amet.',
      featured: false,
      url: 'https://instalura-base.bebusse.vercel.app/',
    },
    {
      imageSource: '/img/projects/profile-image.png',
      alias: 'projeto-3',
      title: 'Projeto 3',
      summary: 'Vestibulum vehicula, lorem sed pulvinar dignissim, odio ex placerat elit, ut lobortis mauris ipsum in nunc. Praesent ultricies in orci vitae convallis.',
      description: 'Vestibulum vehicula, lorem sed pulvinar dignissim, odio ex placerat elit, ut lobortis mauris ipsum in nunc. Praesent ultricies in orci vitae convallis. Donec viverra maximus consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur aliquam quis tortor ac dapibus. Donec est ex, tempor vitae dictum eget, posuere egestas nisl. Morbi suscipit nulla fermentum commodo finibus. Suspendisse felis purus, suscipit non orci eu, blandit suscipit erat.',
      featured: false,
      url: 'https://instalura-base.bebusse.vercel.app/',
    },
    {
      imageSource: '/img/projects/profile-image.png',
      alias: 'projeto-4',
      title: 'Projeto 4',
      summary: 'Etiam interdum vel eros nec interdum. Suspendisse mollis eu ligula at molestie. Donec at justo fringilla, feugiat velit a, vulputate lorem.',
      description: 'Etiam interdum vel eros nec interdum. Suspendisse mollis eu ligula at molestie. Donec at justo fringilla, feugiat velit a, vulputate lorem. Donec id venenatis nibh, vel commodo sapien. Integer malesuada tellus in dictum vehicula. Nulla in cursus sapien. Vestibulum rhoncus interdum hendrerit. Phasellus vel vestibulum sapien, quis tincidunt ante. Integer lectus nulla, gravida eget massa bibendum, aliquam dictum turpis.',
      featured: false,
      url: 'https://instalura-base.bebusse.vercel.app/',
    },
  ];
  const rootUrl = '/projects/';
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ProjectsWrapper>
      <SectionTitle />
      <Grid.Container>
        <Grid.Row>
          {portFolioItems.map((item) => (Card(item, rootUrl)))}
        </Grid.Row>
      </Grid.Container>
    </ProjectsWrapper>
  );
}
