// import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/skills";
import SkillsGrid from "./components/skills_card";
import ContactCard from "./components/contact";
export default function Home(){
    return(
        <div>
            {/* <Navbar /> */}
            <Hero />
            <Skills />
            <SkillsGrid />
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <ContactCard
        name="Muhammad Asif"
        title="Front-end developer"
        email="asifkhadimalpha@gmail.com"
        phone="03102648581"
        imageUrl="https://cdn.pixabay.com/photo/2023/06/01/07/59/call-8033050_1280.png"
      />
        </div>
        </div>
    )
}