import { api } from "./_instances";
import IGetCoursesResponse from "@models/responses/IGetCoursesResponse";

const getCourses = async () => await api.get<IGetCoursesResponse>("/courses");

const CoursesApi = {
  getCourses,
};

export default CoursesApi;
