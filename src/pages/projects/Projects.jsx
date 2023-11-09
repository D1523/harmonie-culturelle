import React, { Suspense, lazy } from "react";
import "./Projects.scss";
// import ProjectCards from "../../components/ProjectCards";
const ProjectCards = lazy(() => import("../../components/ProjectCards"));
const Projects = () => {
  return (
    <>
      <div className="project-bgImg-container">
        <div className="projects__bio-image">
          <h1>Qui sommes-nous ?</h1>

<h4> La Plateforme de Lausanne est une association Lausannoise
 composée de membres dévoués qui partagent la vision d'une 
 communauté solidaire et inclusive. Fondée sur des valeurs de 
 respect mutuel, d'échange et de diversité, notre association 
 se consacre au renforcement du Vivre Ensemble et à la promotion
  de la cohésion sociale.</h4>
        </div>
      </div>
      <main className="projects">
        <div className="projects__items">
          <Suspense fallback={<div>Loadings.....</div>}>
            <ProjectCards />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Projects;

