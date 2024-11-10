import Image from "next/image";

interface Skill {
  title: string;
  description: string;
  imageUrl: string;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image */}
      <div className="flex justify-center items-center h-48 md:h-56">
        <Image
          src={skill.imageUrl}
          width={600}
          height={600}
          alt={skill.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 text-center md:text-left">
        <h2 className="text-2xl font-bold text-[#EB8317]">{skill.title}</h2>
        <p className="text-gray-600 mt-2">{skill.description}</p>
      </div>
    </div>
  );
};

const SkillsGrid: React.FC = () => {
  const skills: Skill[] = [
    {
      title: "Front-End Development",
      description:
        "Skilled in HTML, CSS, and JavaScript, focusing on responsive web interfaces.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/02/22/17/27/programming-3173456_1280.png",
    },
    {
      title: "Graphic Design",
      description:
        "Expertise in creating visually compelling designs with tools like Photoshop and Illustrator.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/10/20/05/29/graphic-designer-4562741_1280.png",
    },
    {
      title: "Typescript",
      description:
        "Experienced with Typescript,  I often use TypeScript in frameworks like React and Next.js, where it helps me write cleaner",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/02/27/17/40/programming-3186084_1280.png",
    },
  ];

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
