type Props = {
  id: number;
  name: string;
};

const SkillsCard = ({ name }: Props) => {
  return (
    <div className=" font-bold cursor-pointer backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-md p-6 border border-gray-200 dark:border-gray-400 flex text-center items-center justify-center">
      <p>{name}</p>
    </div>
  );
};

export default SkillsCard;
