import { Canvas } from "@react-three/fiber";
import ShowRoom from "@components/three/ShowRoom";

const Home = () => {
  return (
    <>
      <Canvas>
        {/* <gridHelper />
        <axesHelper args={[5]} /> */}

        <ShowRoom />
      </Canvas>
    </>
  );
};

export default Home;
