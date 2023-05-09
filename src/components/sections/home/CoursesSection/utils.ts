import ICourse from "@models/ICourses";

export const filterCourses = (courses: ICourse[], tag: string) => {
  if (tag === "Все") return courses;
  return courses.filter((course) => course.tags.includes(tag));
};
