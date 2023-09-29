interface Props {
  tags: string[];
}

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <div className="flex gap-3 flex-wrap mb-3 justify-center sm:justify-start">
      {tags.map((tag) => (
        <span className="bg-primary rounded-3xl py-1 px-5 text-white shadow-lg text-[0.7rem]" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
