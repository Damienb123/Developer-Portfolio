// Style import for Hero
import styles from './HeroStyles.module.css';
// ------------------------------------------
// import for all images used
// ------------------------------------------
import heroImg from '../../assets/image.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/My Resume.pdf'; // Continuously updated
// Use theme import for light and dark mode
// ------------------------------------------
import { useTheme } from '../../common/ThemeContext';
// function call for hero content
function Hero() {
  // constant variable for theme and toggleTheme
  const { theme, toggleTheme } = useTheme();
  // constant variables for light and dark transitions
  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    // sectioned content for hero 
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        
        <img // img for profile picture
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Damien Beltran"
        />
        <img
          className={styles.colorMode} // colorMode for light and dark transitioning
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme} // toggle from light to dark mode
        />
      </div>
      <div className={styles.info}>
        <h1>
          Damien
          <br />
          Beltran
        </h1>
        <h2>
          Senior Computer Science Student at UTSA,
          <br />
          Previous Full-Stack Software Engineer Intern
        </h2>
        <span>
          <a href="https://github.com/Damienb123" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/damien-beltran-01a080222/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" /> 
          </a>
        </span>
        <p className= {styles.description}>
        Simplifying complex problems through user-centric solutions.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;



