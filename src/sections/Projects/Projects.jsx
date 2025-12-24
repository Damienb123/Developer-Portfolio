import styles from './ProjectsStyles.module.css';
import smolagent from '../../assets/smolagent.png';
import bias_analysis from '../../assets/bias_analysis.png'; // Newly added png
import loginscreen from '../../assets/Loginscreen.png'; // Saved for displaying UX design
import soundwave from '../../assets/SoundWavelogo.png'; // Saved for displaying UX design
import linerenderer from '../../assets/LineRenderingApp.png';
import ProjectCard from '../../common/ProjectCard';
import developerjourney from '../../assets/DevelopersJourney.png';
import foodie from '../../assets/FoodiePage.png';
import DigitalWave from '../../assets/DigitalWave.png'; // New import for DigitalWave
import recipeorganizer from '../../assets/recipeorganizer.png'; // New import for Recipe Organizer
import personallogo from '../../assets/personallogo.png'; // New import for Personal Logo

import Soundwaveprototypes from '../../assets/Soundwaveprototypes.png'; // New import for Soundwave prototypes
import UXresearchstudy from '../../assets/UXresearchstudy.png'; // New import for UX research study
import Mealswipes from '../../assets/Mealswipes.png'; // New import for Mealswipes
import FoodieMockup from '../../assets/FoodieMockup.png'; // New import for Foodie mockup
import LePalaiNewFeature from '../../assets/LePalaiNewFeature.png'; // New import for LePal.ai new feature



function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle" style={{ marginBottom: '2rem' }} >Academic Journey</h1>
      {/*Current Course Schedule*/}
     <div className={styles.courseListContainer}>
      <h2 className={styles.courseListTitle}>Summer 2025 Course Schedule</h2>
      <ul className={styles.courseList}>
        <li>CS 3113 - Principles of CyberSecurity</li>
        <li>CS 3753 - Data Science</li>
        <li>CS 4413 - Web Technologies</li>
      </ul>
    </div>
       {/*Current Course Schedule*/}
     <div className={styles.courseListContainer}>
      <h2 className={styles.courseListTitle}>Fall 2025 Course Schedule</h2>
      <ul className={styles.courseList}>
        <li>CS 4673 - Cyber Operations</li>
        <li>CS 4333 - Probability and Computing</li>
        <li>CS 4913 - Independent Study "LLM and Data Managment"</li>
        <li>SOC 3323 - Intro to Social Research</li>
      </ul>
    </div>

       {/*Adding recent work in Artificial intelligence to showcase*/}
      <h1 className="sectionTitle" style={{ marginBottom: '2rem' }} >Artificial Intelligence</h1>
      <p className={styles.description} style={{ marginBottom: '2rem' }}>
       My work explores the development of agentic AI systems with a focus on real-world impact, interpretability, and responsible deployment. 
       I began by earning certification in AI agent development through Hugging Face, where I built my first intelligent agent using the smolagents 
       framework to generate contextual party-planning recommendations.
       In my most recent research, I designed and evaluated a clinical QA agent pipeline using Electronic Health Record (EHR) 
       data to study bias mitigation, demographic fairness, and interpretability in healthcare AI systems. This project integrated retrieval-augmented workflows, 
       demographic filtering, and visual analytics to surface how race, age, gender, and ZIP code influence model behavior and recommendations.
      </p>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={smolagent}
          link="https://github.com/Damienb123/smolagent-training-model"
          h3="AI-Training Model"
          p="SmolAgents AI Training Model"
        />
        <ProjectCard
          src={bias_analysis}
          link="https://github.com/Damienb123/Bias-Mitigation-Research"
          h3="AI and Data Management in The Medical Field"
          p="Independent Study Research"
        />
        </div>
     
      
      {/*Adding symetrically vertical alignment between the SD and UX containers*/}
      <h1 className="sectionTitle" style={{ marginBottom: '2rem' }} >Software Development</h1>
      {/*Implementing a visionary description of software development processes, description styling is integrated*/}
      <p className={styles.description} style={{ marginBottom: '2rem' }}>
    I am passionate about building scalable, maintainable software with an emphasis on teamwork and clear communication. 
    As a software developer, I prioritize clean architecture, efficient collaboration, and thoughtful UX design to create 
    seamless, user-centric experiences. Below are highlights of my work in software development and UX design.
  </p>  
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
          src={DigitalWave}
          link="https://github.com/Damienb123/Login-Page"
          h3="Responsive Login Page"
          p="Interactive Login Page Design"
        />
          <ProjectCard
          src={recipeorganizer}
          link="https://github.com/CS-3743-Database-Systems-Team/Recipe-Organizer-MySQLdatabase"
          h3="Recipe Organizer Database"
          p="MySQL Database for Recipe Organizer"
        />
      </div>

      {/* Updates:
      - Adding the UX Projects section
      - Displaying relevant projects
      - Users can view prototypes and case study interactively
      - Added whitespace of 8rem between the two sections */}
      {/*Adding symetrically vertical alignment between the SD and UX containers*/}
      <h1 className="sectionTitle" style={{ marginTop: '8rem', marginBottom: '2rem' }} >UX/UI</h1>
      {/*Implementing a visionary description of UX Design philosophy, description styling is integrated*/}
      <p className={styles.description} style={{ marginBottom: '2rem' }}>
  I strive to make design more than just a visual it should feel personal, resonate deeply, and enhance everyday experiences. 
  My UX philosophy bridges the gap between function and emotion, creating interfaces and visuals that are not only beautiful 
  but also impactful. Below are examples of my work in UX research, design prototyping, and user-centered innovation.
</p>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={personallogo}
          link="https://www.figma.com/design/kNStC3Yoz2ltj2bxgIrYvC/My-Logo?node-id=0-1&t=zvt5LJqbqC5wfAgG-1"
          h3="Personal Logo"
          p="Logo Design"
        />
         <ProjectCard
          src={Soundwaveprototypes}
          link="https://www.figma.com/design/Ye0CJ9Ryx9YUn1AcLr83B5/Music-App-Prototypes?node-id=0-1&t=tVuXRnSWSdJt7B7U-1"
          h3="Soundwave"
          p="HiFi Prototypes for Soundwave App"
        />
        <ProjectCard
          src={UXresearchstudy}
          link="https://www.figma.com/deck/bzIiDiLzRQC0HAk2vY5ElK/LepPal.ai-Case-Study?node-id=1-27&t=CQTRazICC99Dl3z4-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
          h3="UX Research Case Study"
          p="UX Research Study for LePal.ai" 
        />
        <ProjectCard
          src={Mealswipes}
          link="https://www.figma.com/proto/kYEK1j2epPfcHrXBltTgFy/Food-truck-Review-app-Prototypes?node-id=39-180&starting-point-node-id=39%3A180&t=nJ79qhOzl4RTPdFj-1"
          h3="Meal Swipes"
          p="HiFi Prototypes for Meal Swipes"
        />
         <ProjectCard
          src={FoodieMockup}
          link="https://www.figma.com/proto/gPEzBzymoX13NuKo7hLlKq/Online-Shopping-System--Landing-Page-?node-id=1-2&t=uRACOkLGS7RYcDHd-1"
          h3="Foodie" 
          p="Landing Page Mockup"
        />
          <ProjectCard
          src={LePalaiNewFeature}
          link="https://www.figma.com/proto/CQRwWaNoRROLPBPC2lsTVW/LePal-New-Feature?node-id=5-46&t=dH4gXN0W4XD2tFu6-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
          h3="LePal.ai New Feature"
          p="Search For Friends"
        />
      </div>
 
    </section>

  );
}

export default Projects;






