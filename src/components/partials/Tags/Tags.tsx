import styles from "./styles.module.scss";

interface Props {
  tags: string[];
}

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <div className="flex gap-3 flex-wrap mb-3 justify-center sm:justify-start">
      {tags.map((tag) => (
        <span className={styles.tag} key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
