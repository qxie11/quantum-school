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

const CoursesSection = ({ courses: { tags, courses } }: Props) => {
  const { isMD } = useMedia();

  const tabsItems = ["Все", ...tags].map((tag) => ({
    label: tag,
    key: tag,
    children: filterCourses(courses, tag).map((course) => (
      <div
        className="mb-12 flex gap-12 relative flex-col sm:flex-row items-center sm:items-start"
        key={course.name}
      >
        <Link href={`/course/${course.slug}`}>
          <a
            className={cx(
              "absolute top-0 left-0 right-0 bottom-0 z-[2]",
              styles.link
            )}
          ></a>
        </Link>
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
          <Tags tags={course.tags} />{" "}
          <Title className="text-center sm:text-start" size="small">
            {course.name}
          </Title>
        </div>
      </div>
    )),
  }));

  return (
    <Section id="courses" className="pt-16">
      <Container>
        <Title className="text-center mb-24">✍️ Курсы</Title>
        <Tabs
          className={styles.tabs}
          tabPosition={isMD ? "left" : "top"}
          items={tabsItems}
        />
      </Container>
    </Section>
  );
};

CoursesSection.getServerSideProps = async () => {
  const courses = await CoursesApi.getCourses();

  return {
    props: { courses: courses.data },
  };
};

export default CoursesSection;
