{/*import for styling*/}
{/*-------------------------------*/}
import styles from './SkillsStyles.module.css';
{/*import for image use*/}
{/*-------------------------------*/}
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
{/*fontawesome integration and image use*/}
{/*-------------------------------*/}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons'; 
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faJira } from '@fortawesome/free-brands-svg-icons';
import { faNotion } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
{/*function call for skills section*/}
function Skills() {
  {/*constant variables using useTheme*/}
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  {/*starting the section for skills*/}
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      
       <div className={styles.skillsGrid}>

    {/* Frontend */}
    <div className={styles.skillCategory}>
      <h2>Frontend</h2>
      <div className={styles.skillList}>
        <FontAwesomeIcon icon={faHtml5} size="4x" style={{ color: "#f50000" }} />
        <FontAwesomeIcon icon={faCss3Alt} size="4x" style={{ color: "#74C0FC" }} />
        <FontAwesomeIcon icon={faJs} size="4x" style={{ color: "#FFD43B" }} />
        <FontAwesomeIcon icon={faReact} size="4x" style={{ color: "#74C0FC" }} />
        <FontAwesomeIcon icon={faAngular} size="4x" style={{ color: "#ff0033" }} />
      </div>
    </div>

    {/* Backend */}
    <div className={styles.skillCategory}>
      <h2>Backend</h2>
      <div className={styles.skillList}>
        <FontAwesomeIcon icon={faNodeJs} size="4x" style={{ color: "#00ff62" }} />
        <FontAwesomeIcon icon={faJava} size="4x" style={{ color: "#74C0FC" }} />
        <FontAwesomeIcon icon={faPython} size="4x" style={{ color: "#FFD43B" }} />
        <FontAwesomeIcon icon={faDatabase} size="4x" style={{ color: "#74C0FC" }} />
        <FontAwesomeIcon icon={faServer} size="4x" style={{ color: "#B197FC" }} />
      </div>
    </div>

    {/* Tools */}
    <div className={styles.skillCategory}>
      <h2>Tools</h2>
      <div className={styles.skillList}>
        <FontAwesomeIcon icon={faJira} size="4x" style={{ color: "#74C0FC" }} />
        <FontAwesomeIcon icon={faNotion} size="4x" style={{ color: "#0400ff" }} />
        <FontAwesomeIcon icon={faFigma} size="4x" style={{ color: "#ae00ff" }} />
      </div>
    </div>

  </div>
    </section>
  );
}

export default Skills;


