import styles from './ProjectsStyles.module.css';
import smolagent from '../../assets/smolagent.png';
import loginscreen from '../../assets/Loginscreen.png';
import soundwave from '../../assets/SoundWavelogo.png';
import linerenderer from '../../assets/LineRenderingApp.png';
import ProjectCard from '../../common/ProjectCard';
import developerjourney from '../../assets/DevelopersJourney.png';
import foodie from '../../assets/FoodiePage.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={foodie}
          link="https://github.com/Software-Engineering-Project-Team/online_shopping_system"
          h3="Foodie"
          p="Grocery Store App"
        />
         <ProjectCard
          src={developerjourney}
          link="https://github.com/Damienb123/developer-journey"
          h3="My Blog Page"
          p="A Developers Journey"
        />
        <ProjectCard
          src={linerenderer}
          link="https://github.com/Damienb123/WebGL-line-renderer"
          h3="WebGL Line Renderer"
          p="Interactive Line Rendering App" 
        />
        <ProjectCard
          src={smolagent}
          link="https://github.com/Damienb123/smolagent-training-model"
          h3="AI-Training Model"
          p="SmolAgents AI Training Model"
        />
         <ProjectCard
          src={loginscreen}
          link="https://www.figma.com/design/Ye0CJ9Ryx9YUn1AcLr83B5/Music-App-Prototypes?node-id=1-3&t=rIxgLUoJkiwx9FvU-1"
          h3="Login Page Design"
          p="Prototype Design"
        />
          <ProjectCard
          src={soundwave}
          link="https://www.figma.com/design/OO2wY7olkMnKagpqspaVOd/SoundWave-Logo?node-id=0-1&t=BJnMwknRawM37YL0-1"
          h3="SoundWave Music App Logo"
          p="Prototype Logo Design"
        />
      </div>
    </section>
  );
}

export default Projects;
