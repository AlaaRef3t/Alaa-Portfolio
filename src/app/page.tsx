import AboutComp from "@/components/about-comp/AboutComp";
import ContactComp from "@/components/contact/ContactComp";
import MyInfoComp from "@/components/MyInfo/MyInfoComp";
import ProjectsComp from "@/components/projects/ProjectsComp";
import SkillsComp from "@/components/skills-comp/SkillsComp";


export default function Home() {
  return (
    <>
      <MyInfoComp />
      <AboutComp />
      <SkillsComp />
      <ProjectsComp />
      <ContactComp />
    
    </>
    
  );
}
