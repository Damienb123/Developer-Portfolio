import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
{/* Updates:
  - Removing MongoDB
  - Adding Project Management skills as a new layer to showcasing */}
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Node" />
         <SkillList src={checkMarkIcon} skill="WebGL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Angular" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="PHP" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="MySQL Server/Workbench" />
        <SkillList src={checkMarkIcon} skill="NoSQL" />
        <SkillList src={checkMarkIcon} skill="Firebase" />
        </div>
       <hr />
       <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="JIRA" /> 
        <SkillList src={checkMarkIcon} skill="Agile Workflows" />
        <SkillList src={checkMarkIcon} skill="Notion" />
      </div>
      <hr />
      <div className={styles.skillList}
        <SkillList src={checkMarkIcon} skill="RAG" />
        <SkillList src={checkMarkIcon} skill="Smolagents" />
        <SkillList src={checkMarkIcon} skill="LlamaIndex" />
        <SkillList src={checkMarkIcon} skill="LangChain" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Figma/FigJam" />
        <SkillList src={checkMarkIcon} skill="Adobe Express" />
        <SkillList src={checkMarkIcon} skill="Adobe Indesign"/>
      </div>
    </section>
  );
}

export default Skills;
