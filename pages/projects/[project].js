import React from 'react';
import ProjectScreen from '../../src/components/screens/ProjectScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function ProjectInternalScreen({ projectProps }) {
  return (
    <ProjectScreen
      projectProps={projectProps}
    />
  );
}

ProjectInternalScreen.propTypes = ProjectScreen.propTypes;

export default websitePageHOC(ProjectInternalScreen);

export async function getStaticProps({ params }) {
  const projects = await fetch('https://portfolio-bernardo.vercel.app/api/content/projects')
    .then(async (respostaDoServer) => {
      const resposta = await respostaDoServer.json();
      return resposta;
    });

  const dadosDaPagina = projects.find((project) => {
    if (project.alias === params.project) {
      return project;
    }
    return false;
  });
  return {
    props: {
      projectProps: dadosDaPagina,
    },
  };
}

// export async function getStaticPaths() {
//   const projects = await fetch('https://portfolio-bernardo.vercel.app/api/content/projects')
//     .then(async (respostaDoServer) => {
//       const resposta = await respostaDoServer.json();
//       return resposta;
//     });

//   const paths = projects.map((project) => {
//     const projectSlug = project.alias;
//     return { params: { project: projectSlug } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }
