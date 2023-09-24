import { arrayIcons } from "./icons.data";

export const IconsRow = (
  <div className="flex flex-row gap-4">
    {arrayIcons.map((elem) => {
      return <div key={elem.key}>{elem.data}</div>;
    })}
  </div>
);
