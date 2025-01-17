import { OrbitControls, Preload, useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { Canvas, useGraph } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import Loader from './Loader';
import { SkeletonUtils } from 'three-stdlib';

const Model = ({ gotCatch, ...props }) => {
	const modelGroup = useRef();
	const cleanAnimationTrackNames = (animations, prefixToRemove) => {
		animations.forEach((animation) => {
			animation.tracks.forEach((track) => {
				if (track.name.startsWith(prefixToRemove)) {
					track.name = track.name.replace(prefixToRemove, '');
				}
			});
		});
	};

	const { scene } = useGLTF('/models/nivindulakshitha.glb');
	const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
	const { nodes, materials } = useGraph(clone);

	const fbxAnimation = useFBX(`/models/animations/${gotCatch ? 'offence' : 'pointing'}.fbx`);
	fbxAnimation.animations[0].name = 'fbx';
	cleanAnimationTrackNames(fbxAnimation.animations, 'mixamorig');

	const { actions } = useAnimations([fbxAnimation.animations[0]], modelGroup);

	useEffect(() => {
		actions['fbx']?.reset().fadeIn(0.5).play();
		return () => actions['fbx']?.fadeOut(0.5);
	}, [actions, gotCatch]);

	return (
		<group {...props} dispose={null} ref={modelGroup}>
			<primitive object={nodes.Hips} />
			{Object.keys(nodes).map((key) => {
				const node = nodes[key];
				if (node.isSkinnedMesh) {
					return (
						<skinnedMesh
							key={key}
							name={node.name}
							geometry={node.geometry}
							material={materials[node.material.name]}
							skeleton={node.skeleton}
							morphTargetDictionary={node.morphTargetDictionary}
							morphTargetInfluences={node.morphTargetInfluences}
						/>
					);
				}
				return null;
			})}
		</group>
	);
};

useGLTF.preload('/models/nivindulakshitha.glb');

const Developer = () => {
	const [gotCatch, setGotCatch] = useState(false)

	return (
		<div className="w-full z-0 absolute right-0 bottom-0 h-full">
			<Canvas
				camera={{ position: [550, 10, 500], fov: gotCatch ? 10 : 8 }}
				shadows
				gl={{ antialias: true, powerPreference: 'low-power', alpha: true }}
			>
				<ambientLight intensity={2.3} />
				<directionalLight
					position={[5, 10, 5]}
					intensity={0.8}
					castShadow
					shadow-mapSize-width={512}
					shadow-mapSize-height={512}
				/>
				<Suspense fallback={<Loader />}>
					<Model scale={1.5} position-y={gotCatch ? -1.5 : -1.3} position-x={2.5} gotCatch={gotCatch}/>
				</Suspense>
				<OrbitControls 
					enableZoom={false}
					enablePan={false}
					enableRotate={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={0}
					maxDistance={20}
					minDistance={2}
					dampingFactor={0.05}
					enableDamping={false}
				/>
				<Preload all />
			</Canvas>
		</div>
	);
};

export default Developer;