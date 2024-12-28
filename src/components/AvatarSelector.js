import React, { useState, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const AvatarSelector = ({ onAvatarSelect }) => {
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const maleAvatarPath = "/assets/675c0a7b3256aa67f01d85dd.glb";
  const femaleAvatarPath = "/assets/676a960c04e765bb6b09082d.glb";

  useEffect(() => {
    initAvatarViewer("maleAvatar", maleAvatarPath);
    initAvatarViewer("femaleAvatar", femaleAvatarPath);
  }, []);

  const handleAvatarChange = (e) => {
    setSelectedAvatar(e.target.value);
    onAvatarSelect(e.target.value);
  };

  const initAvatarViewer = (elementId, modelPath) => {
    const container = document.getElementById(elementId);
    if (container) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true });

      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      const loader = new GLTFLoader();
      loader.load(modelPath, function (gltf) {
        scene.add(gltf.scene);
        gltf.scene.position.set(0, -1, 0);
        gltf.scene.scale.set(0.5, 0.5, 0.5);
        animate();
      });

      camera.position.z = 2;

      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }
    }
  };

  return (
    <div>
      <h4>Choose an Avatar</h4>
      <div className="avatar-container">
        <div>
          <div id="maleAvatar" className="avatar-render"></div>
          <input
            type="radio"
            id="maleAvatarRadio"
            name="avatar"
            value={maleAvatarPath}
            onChange={handleAvatarChange}
            required
          />
          <label htmlFor="maleAvatarRadio">Male</label>
        </div>
        <div>
          <div id="femaleAvatar" className="avatar-render"></div>
          <input
            type="radio"
            id="femaleAvatarRadio"
            name="avatar"
            value={femaleAvatarPath}
            onChange={handleAvatarChange}
          />
          <label htmlFor="femaleAvatarRadio">Female</label>
        </div>
      </div>
    </div>
  );
};

export default AvatarSelector;
