// import React, { useEffect, useRef } from "react";
// import { useGLTF, useAnimations } from "@react-three/drei";

// const Character = ({ currentAnimationName }) => {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF('/6758799f130072afa6b4b6da.glb');
//   const { actions } = useAnimations(animations, group);
  
//   // Log the available actions to see what animation names are present
//   console.log(actions);

//   useEffect(() => {
//     // Check if the action exists before trying to play it
//     if (actions[currentAnimationName]) {
//       actions[currentAnimationName].reset().fadeIn(0.5).play();
//       return () => actions[currentAnimationName].fadeOut(0.5);
//     } else {
//       console.warn(`Animation "${currentAnimationName}" not found`);
//     }
//   }, [currentAnimationName, actions]);

//   return (
//     <group ref={group} position={[0, -1, 0]} dispose={null}>
//       <primitive object={nodes.Hips} />
//       <skinnedMesh
//         name="EyeLeft"
//         geometry={nodes.EyeLeft.geometry}
//         material={materials.Wolf3D_Eye}
//         skeleton={nodes.EyeLeft.skeleton}
//         morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
//         morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
//       />
//       <skinnedMesh
//         name="EyeRight"
//         geometry={nodes.EyeRight.geometry}
//         material={materials.Wolf3D_Eye}
//         skeleton={nodes.EyeRight.skeleton}
//         morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
//         morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
//       />
//       <skinnedMesh
//         name="Wolf3D_Head"
//         geometry={nodes.Wolf3D_Head.geometry}
//         material={materials.Wolf3D_Skin}
//         skeleton={nodes.Wolf3D_Head.skeleton}
//         morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
//         morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
//       />
//       <skinnedMesh
//         name="Wolf3D_Teeth"
//         geometry={nodes.Wolf3D_Teeth.geometry}
//         material={materials.Wolf3D_Teeth}
//         skeleton={nodes.Wolf3D_Teeth.skeleton}
//         morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
//         morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Hair.geometry}
//         material={materials.Wolf3D_Hair}
//         skeleton={nodes.Wolf3D_Hair.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Glasses.geometry}
//         material={materials.Wolf3D_Glasses}
//         skeleton={nodes.Wolf3D_Glasses.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Outfit_Top.geometry}
//         material={materials.Wolf3D_Outfit_Top}
//         skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
//         material={materials.Wolf3D_Outfit_Bottom}
//         skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
//         material={materials.Wolf3D_Outfit_Footwear}
//         skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Body.geometry}
//         material={materials.Wolf3D_Body}
//         skeleton={nodes.Wolf3D_Body.skeleton}
//       />
//     </group>
//   );
// };

// useGLTF.preload("/6758799f130072afa6b4b6da.glb");

// export default Character;



// import React, { useEffect, useRef } from "react";
// import { useGLTF, useAnimations } from "@react-three/drei";

// const Character = ({ currentAnimationName }) => {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF('/6758799f130072afa6b4b6da.glb');
//   const { actions } = useAnimations(animations, group);

//   useEffect(() => {
//     if (actions[currentAnimationName]) {
//       actions[currentAnimationName].reset().fadeIn(0.5).play();
//       return () => actions[currentAnimationName].fadeOut(0.5);
//     } else {
//       console.warn(`Animation "${currentAnimationName}" not found`);
//     }
//   }, [currentAnimationName, actions]);

//   return (
//     <group ref={group} position={[0, -1, 0]} dispose={null}>
//       <primitive object={nodes.Hips} />
//       {/* Add skinnedMesh elements here */}
//       <skinnedMesh
//         name="EyeLeft"
//         geometry={nodes.EyeLeft.geometry}
//         material={materials.Wolf3D_Eye}
//         skeleton={nodes.EyeLeft.skeleton}
//         morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
//         morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
//       />
//       <skinnedMesh
//         name="EyeRight"
//         geometry={nodes.EyeRight.geometry}
//         material={materials.Wolf3D_Eye}
//         skeleton={nodes.EyeRight.skeleton}
//         morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
//         morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
//       />
//       <skinnedMesh
//         name="Wolf3D_Head"
//         geometry={nodes.Wolf3D_Head.geometry}
//         material={materials.Wolf3D_Skin}
//         skeleton={nodes.Wolf3D_Head.skeleton}
//         morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
//         morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
//       />
//       <skinnedMesh
//         name="Wolf3D_Teeth"
//         geometry={nodes.Wolf3D_Teeth.geometry}
//         material={materials.Wolf3D_Teeth}
//         skeleton={nodes.Wolf3D_Teeth.skeleton}
//         morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
//         morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Hair.geometry}
//         material={materials.Wolf3D_Hair}
//         skeleton={nodes.Wolf3D_Hair.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Glasses.geometry}
//         material={materials.Wolf3D_Glasses}
//         skeleton={nodes.Wolf3D_Glasses.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Outfit_Top.geometry}
//         material={materials.Wolf3D_Outfit_Top}
//         skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
//         material={materials.Wolf3D_Outfit_Bottom}
//         skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
//         material={materials.Wolf3D_Outfit_Footwear}
//         skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Body.geometry}
//         material={materials.Wolf3D_Body}
//         skeleton={nodes.Wolf3D_Body.skeleton}
//       />
//     </group>
//   );
// };

// useGLTF.preload("/6758799f130072afa6b4b6da.glb");

// export default Character;








// 

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";

const Character = ({ currentAnimationName }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/stacy.glb");
  const { actions } = useAnimations(animations, group);
  const texture = useTexture("/stacy.jpg");

  useEffect(() => {
    actions[currentAnimationName].reset().fadeIn(0.5).play();
    return () => actions[currentAnimationName].fadeOut(0.5);
  }, [currentAnimationName]);

  return (
    <>
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="Stacy" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="stacy"
            geometry={nodes.stacy.geometry}
            material={nodes.stacy.material}
            skeleton={nodes.stacy.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <meshStandardMaterial map={texture} map-flipY={false} />
          </skinnedMesh>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
    </>
    
  );
};

useGLTF.preload("/stacy.glb");

export default Character;
