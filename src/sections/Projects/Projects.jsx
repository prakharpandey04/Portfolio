import styles from "./ProjectsStyles.module.css";
import kobodrop from "../../assets/kobodrop.jpeg";
import drumKit from "../../assets/drumkit.jpeg";
import tindog from "../../assets/tindog.jpeg";
import diceChallenge from "../../assets/dice.jpeg";
import crudOperation from "../../assets/CRUD.jpeg";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={kobodrop}
          link="https://665b284f288c9ee6d24b21b5--deployed-kubodrop-app.netlify.app/"
          h3="Kobodrop"
          p="Financial frontend App"
        />
        <ProjectCard
          src={drumKit}
          link="https://drum-kit-sigma-two.vercel.app/"
          h3="Drum Kit"
          p="Drummer App"
        />
        <ProjectCard
          src={tindog}
          link="https://tindog-frontend.vercel.app/"
          h3="Tindog"
          p="Tinder for Dog's "
        />
        <ProjectCard
          src={diceChallenge}
          link="https://github.com/prakharpandey04/DiceChallenge"
          h3="Dice Challenge APP"
          p="Dice App"
        />
        <ProjectCard
          src={crudOperation}
          link="https://github.com/prakharpandey04/springbootCrudAppBackend"
          h3="CRUD APP"
          p="CRUD Operation"
        />
      </div>
    </section>
  );
}

export default Projects;
