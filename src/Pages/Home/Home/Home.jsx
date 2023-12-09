import Banner from "../Banner/Banner";
import Doctor from "../Doctor/Doctor";
import Featured from "../Featured/Featured";
import Recommendation from "../Recommendation/Recommendation";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <Recommendation></Recommendation>

      <Doctor></Doctor>
    </div>
  );
};

export default Home;
