import { Footer, Header } from "@widgets/index";
import { HomePage } from "@pages/index";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
};

export default Home;
