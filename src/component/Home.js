import Movies from "./Movies";
import SliderImg from "./SliderImg";

const Home = () => {
  return (
    <main className="container mx-auto   px-8  main-content w-full text-white bg-body-background  bg-cover bg-no-repeat bg-center overflow-hidden">
      <SliderImg />
      <Movies />
    </main>
  );
};

export default Home;
