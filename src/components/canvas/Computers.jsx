/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { Environment } from '@react-three/drei';
import { gsap } from 'gsap';

const Computers = ({ isMobile, props }) => {
	const groupRef = useRef(); // Reference for GSAP animation
	const { nodes, materials } = useGLTF('/computer/monitor.glb');

	// Optional: Enhance material dynamically if possible
	if (materials.Base) {
		materials.Base.roughness = 0.5; // Lower roughness for a shinier surface
		materials.Base.metalness = 1; // Higher metalness for reflectivity
	}
	if (materials.Display) {
		materials.Display.emissiveIntensity = 1; // Make the display more vivid
	}

	useEffect(() => {
		if (groupRef.current) {
			gsap.to(groupRef.current.rotation, {
				y: Math.PI / 4,
				duration: 3,
				repeat: -1,
				yoyo: true,
				ease: "power1.inOut",
			});
		}
	}, []);

	return (
		<group ref={groupRef} {...props} dispose={null}>
			<group scale={0.1}>
				<mesh
					geometry={nodes.Screen_Display_0.geometry}
					material={materials.Display}
					scale={100}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Main_low_Base_0.geometry}
					material={materials.Base}
					position={[0, -10.552, -5.016]}
					scale={100}
				/>
			</group>
		</group>
	);
};

useGLTF.preload('/computer/monitor.glb');

const ComputerCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 500px)');
		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (e) => {
			setIsMobile(e.matches);
		};

		mediaQuery.addEventListener('change', handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			className="w-full h-full absolute min-w-full min-h-full"
			frameloop="always"
			shadows
			camera={{ position: [20, 3, 65], fov: 7 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<ambientLight intensity={0.8} />
			<directionalLight position={[5, 10, 5]} intensity={2} castShadow />
			<pointLight position={[-10, 10, -10]} intensity={5} />

			<Suspense fallback={<CanvasLoader />}>
				<Environment preset="warehouse" intensity={2} />
				<OrbitControls
					enablePan={true}
					enableZoom={true}
					enableDamping
					dampingFactor={0.2}
					rotateSpeed={-0.5}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputerCanvas;