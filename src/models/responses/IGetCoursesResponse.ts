import ICourse from "@models/ICourses";

interface IGetCoursesResponse {
  tags: string[];
  courses: ICourse[];
}

export default IGetCoursesResponse;
