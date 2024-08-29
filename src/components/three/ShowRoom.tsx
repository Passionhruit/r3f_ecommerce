import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { useRef, useState } from "react";

const ShowRoom = () => {
  const gltf = useLoader(GLTFLoader, "./models/body2.glb");
  const { scene, raycaster } = useThree();

  const cameraControlsRef = useRef<CameraControls>(null);
  const bodyClick = () => {
    const intersects = raycaster.intersectObjects(gltf.scene.children, true);
    const firstObj = intersects[0].object as THREE.Mesh;

    console.log(firstObj);
  };
  return (
    <>
      <CameraControls
        ref={cameraControlsRef}
        enabled={true} // camera 컨트롤 가능
        dollyToCursor={false} // 커서에 의해 zoom in , zoom out 하는 위치 변경
        minDistance={1.5} // 카메라 최소 줌
        maxDistance={0.5} // 카메라 최대 줌
        infinityDolly={false} // 최대,최소줌 없앰
      />
      <directionalLight position={[3, 3, 3]} />
      <primitive object={gltf.scene} onClick={bodyClick} />
    </>
  );
};

export default ShowRoom;
