import { useRef, useEffect  } from 'react';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


const AboutPageThreejs = () => {
    const refContainer = useRef(null);
    useEffect(() => {
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        //@ts-ignore
        refContainer.current && refContainer.current.appendChild( renderer.domElement );
        const geometry = new THREE.SphereGeometry(13, 16, 16)
        const material = new THREE.MeshBasicMaterial( {color: 0xFF6347, wireframe: true})
        const sphere = new THREE.Mesh(geometry, material)

        scene.add(sphere)
        camera.position.setZ(30)
        camera.position.setX(-3)
        const animate = function () {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.005
        sphere.rotation.y += 0.005
        sphere.rotation.z += 0.005
        
        renderer.render(scene, camera);
        };

      animate();

    }, []);

    return (
      <main ref={refContainer}></main>
  
    );
  }

export default AboutPageThreejs;