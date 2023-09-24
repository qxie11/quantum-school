import { arrayParents } from "./footer.data";

export const MappedElems = () => {
  return (
    <>
      {arrayParents.map((elem, index) => {
        return (
          <div key={index} className="flex flex-col basis-1/4 gap-4">
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
