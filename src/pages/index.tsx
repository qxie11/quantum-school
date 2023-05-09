import Head from "next/head";
import { Header } from "@components/partials";
import { IntroSection, CoursesSection } from "@components/sections/home";
import IGetCoursesResponse from "@models/responses/IGetCoursesResponse";

interface Props {
  courses: IGetCoursesResponse;
}

export default function Home({ courses }: Props) {
  return (
    <>
      <Head>
        <title>Quantum School: Обучение web-разработке.</title>
      </Head>
      <Header />
      <main>
        <IntroSection />
        <CoursesSection courses={courses} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const coursesSectionProps = await CoursesSection.getServerSideProps();

  return {
    props: {
      ...coursesSectionProps.props,
    },
  };
}
