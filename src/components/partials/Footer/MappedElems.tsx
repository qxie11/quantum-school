import cx from "classnames";
import { arrayParents } from "./footer.data";

export const MappedElems = () => {
  return (
    <>
      {arrayParents.map((elem, index) => {
        return (
          <div
            key={index}
            className={cx("flex flex-col gap-4", { "w-1/4": index === 2 })}
          >
            {elem.map((elemChild) => {
              return (
                <div key={elemChild.key} className={elemChild.style}>
                  {elemChild.data}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
