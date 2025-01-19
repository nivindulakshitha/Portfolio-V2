import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useVideoTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { Environment } from '@react-three/drei';
import { gsap } from 'gsap';

const Computers = ({ project, props }) => {
	const groupRef = useRef();

	const gltf = useGLTF('/computer/monitor.glb');
	const nodes = gltf.nodes;
	const materials = gltf.materials;

	const videoTexture = useVideoTexture('/computer/project1.mp4', {
		loop: true,
		autoplay: true,
		muted: true,
	});

	useEffect(() => {
		if (materials?.Base) {
			materials.Base.roughness = 0.7; // Lower values make it shinier
		}
	}, [materials]);

	useEffect(() => {
		if (groupRef.current) {
			gsap.to(groupRef.current.rotation, {
				y: Math.PI / 4,
				duration: 3,
				repeat: -1,
				yoyo: true,
				ease: 'power1.inOut',
			});
		}
	}, []);

	useEffect(() => {
		console.log(project)
		if (groupRef.current) {
			gsap.to(groupRef.current.rotation, {
				y: Math.PI * 2,
				duration: 1,
				repeat: 0,  // Changed from 1 to 0
				yoyo: false,
				ease: 'power1.inOut',
			});
		}
	}, [project])

	return nodes && materials ? (
		<group ref={groupRef} {...props} position-y={0.5} dispose={null}>
			<group scale={0.1}>
				<mesh geometry={nodes.Screen_Display_0.geometry} scale={100}>
					<meshStandardMaterial
						map={videoTexture}
						emissiveMap={videoTexture}
						emissiveIntensity={0.5} // Add emissive glow to enhance visibility
					/>
				</mesh>
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
	) : null;
};

useGLTF.preload('/computer/monitor.glb');

const ComputerCanvas = ({project}) => {
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
			className="w-full h-full absolute min-w-full min-h-full pointer-events-none"
			frameloop="always"
			shadows
			camera={{ position: [20, 3, 65], fov: 7 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<ambientLight intensity={0.2} />
			<pointLight position={[-10, 10, -10]} intensity={10} />

			<Suspense fallback={<CanvasLoader />}>
				<Environment preset="warehouse" intensity={0} />
				<OrbitControls
					enabled={false} // Disable user interaction
				/>
				<Computers project={project} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputerCanvas;