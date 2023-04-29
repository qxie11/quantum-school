import Head from "next/head";
import { Header } from "@components/partials";
import { IntroSection } from "@components/sections/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Онлайн курсы: обучение web-разработке</title>
      </Head>
      <Header />
      <main>
        <IntroSection />
      </main>
    </>
  );
}
