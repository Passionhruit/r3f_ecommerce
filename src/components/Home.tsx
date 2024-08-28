import { Canvas } from "@react-three/fiber";
import ShowRoom from "./ShowRoom";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
  return (
    <>
      <Canvas>
        <gridHelper />
        <axesHelper args={[5]} />
        <OrbitControls />
        <directionalLight position={[3, 3, 3]} />
        <ShowRoom />
      </Canvas>
    </>
  );
};

export default Home;
