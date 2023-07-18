import React, { useEffect } from 'react';
import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';
import '../Sass/ThreeScene.scss';

const ThreeScene = () => {
  useEffect(() => {
    let stats;
    let camera, scene, renderer;
    let mouseX = 0, mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', onDocumentMouseMove);

    init();
    animate();

    function init() {
      const container = document.getElementById('container');

      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.z = 800;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);
      scene.matrixAutoUpdate = false;

      const material = new THREE.MeshNormalMaterial();

      const cubeGeometry = new THREE.BoxGeometry(200, 200, 200); // Create a cube geometry

      for (let i = 0; i < 7700; i++) {
        const mesh = new THREE.Mesh(cubeGeometry, material); // Use the cube geometry
        mesh.position.x = Math.random() * 10000 - 5000;
        mesh.position.y = Math.random() * 10000 - 5000;
        mesh.position.z = Math.random() * 10000 - 5000;
        mesh.rotation.x = Math.random() * 2 * Math.PI;
        mesh.rotation.y = Math.random() * 2 * Math.PI;
        mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 50 + 100;
        mesh.matrixAutoUpdate = false;
        mesh.updateMatrix();
        scene.add(mesh);
      }

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      container.appendChild(renderer.domElement);

      stats = new Stats();
      container.appendChild(stats.dom);

      window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event) {
      mouseX = (event.clientX - windowHalfX) * 10;
      mouseY = (event.clientY - windowHalfY) * 10;
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
      stats.update();
    }

    function render() {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    }

    return () => {
      // Cleanup code if needed
      // ...
    };
  }, []);

  return (
    <div className="three-js-example">
      {/* The container for the WebGL canvas */}
      <div id="container"></div>
    </div>
  );
};

export default ThreeScene;
