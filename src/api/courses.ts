// import IGetCoursesResponse from "@models/responses/IGetCoursesResponse";
import { baseUrlInstance } from "./_instances";

const getCourses = async () => await baseUrlInstance.get("/courses");

const CoursesApi = {
  getCourses,
};

export default CoursesApi;
