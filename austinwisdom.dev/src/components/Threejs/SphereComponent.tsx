//@ts-nocheck
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'
import { useRef } from 'react';

const SphereComponent = () => {
    
    const myMesh = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });

    return (
        <mesh ref={myMesh}>
                <sphereGeometry args={[13, 16, 16]} />
                <meshBasicMaterial wireframe color={0xFEE2E1} />
        </mesh>
    );
};

export default SphereComponent;