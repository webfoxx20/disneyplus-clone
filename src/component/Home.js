import Movies from "./Movies";
// import MoviesView from "./MoviesView";
import Recommends from "./Recommends";
import SliderImg from "./SliderImg";

const Home = () => {
  return (
    <main className="container mx-auto   px-10  main-content w-full text-white bg-body-background  bg-cover bg-no-repeat bg-center overflow-hidden">
      <SliderImg />
      <Movies />
      <Recommends />
      {/* <MoviesView /> */}
    </main>
  );
};

export default Home;
