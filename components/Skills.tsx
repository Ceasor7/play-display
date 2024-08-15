import SkillsCard from './SkillsCard';

type Props = {
  id: number;
  name: string;
};

const skillsData: Props[] = [
  { id: 1, name: 'UI/UX Designer' },
  { id: 2, name: 'MongoDB' },
  { id: 3, name: 'Javsscript' },
  { id: 4, name: 'TypeScript' },
  { id: 5, name: 'NextJS' },
  { id: 6, name: 'ReactJS' },
  { id: 7, name: 'Tailwindcss' },
  { id: 8, name: 'CSS' },
  { id: 9, name: 'Figma' },
  { id: 10, name: 'Web Design' },
  { id: 11, name: 'Docker' },
  { id: 12, name: 'AWS Cloud ' },
];

const Skills = () => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {skillsData.map((skill) => (
        <SkillsCard key={skill.id} {...skill} />
      ))}
    </div>
  );
};

export default Skills;
