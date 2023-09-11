import Image from "next/image";
import Link from "next/link";
import cx from "classnames";
import { Container } from "@components/layout";
import { Section, Tabs, Tags } from "@components/partials";
import { Title } from "@components/typography";
import CoursesApi from "@api/courses";
import { filterCourses } from "./utils";
import IGetCoursesResponse from "@models/responses/IGetCoursesResponse";
import useMedia from "@hooks/useMedia";

import styles from "./styles.module.scss";

interface Props {
  courses: IGetCoursesResponse;
}

const CoursesSection = ({ courses }: Props) => {
  const { isMD } = useMedia();

  const tabsItems = (courses ? ["Все", ...courses.tags] : []).map((tag) => ({
    label: tag,
    key: tag,
    children: filterCourses(courses?.courses, tag).map((course) => (
      <div
        className="mb-12 flex gap-12 relative flex-col sm:flex-row items-center sm:items-start"
        key={course.name}
      >
        <Link
          className={cx(
            "absolute top-0 left-0 right-0 bottom-0 z-[2]",
            styles.link
          )}
          href={`/course/${course.slug}`}
        ></Link>
        <span
          className={cx(
            "absolute w-14 h-14 top-1/2 right-0 text-3xl rounded-full",
            "items-center justify-center z-[1] md:flex hidden",
            styles.see
          )}
        >
          👀
        </span>
        <div className="overflow-hidden rounded-2xl h-[120px] w-[auto] sm:w-[140px] shadow-md">
          <Image
            src={`${process.env.BASE_URL}/${course.image}`}
            layout="fixed"
            width="120"
            height="120"
            alt={course.name}
          />
        </div>
        <div className="w-full">
          <Tags tags={course?.tags} />{" "}
          <Title
            variant="h3"
            className="text-center sm:text-start"
            size="small"
          >
            {course.name}
          </Title>
        </div>
      </div>
    )),
  }));

  return (
    <Section id="courses" className="pt-16">
      <Container>
        <Title variant="h2" className="text-center mb-24">
          ✍️ Курсы
        </Title>
        {courses ? (
          <Tabs
            className={styles.tabs}
            tabPosition={isMD ? "left" : "top"}
            items={tabsItems}
          />
        ) : (
          "Network error while getting courses"
        )}
      </Container>
    </Section>
  );
};

CoursesSection.getServerSideProps = async () => {
  try {
    const courses = await CoursesApi.getCourses();

    return {
      props: { courses: courses.data },
    };
  } catch {
    return {
      props: { courses: null },
    };
  }
};

export default CoursesSection;
