/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';


// eslint-disable-next-line react/prop-types
const Computers = ({ isMobile }) => {
	const computer = useGLTF('/desktop_pc/scene.gltf');

	return (
		<group>
			<hemisphereLight args={['#ffffff', '#000000', 2]} />
			<pointLight intensity={2} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={computer.scene}
				scale={window.innerWidth < 500 ? 0.5 :
					   window.innerWidth < 768 ? 0.65 :
					   window.innerWidth < 1024 ? 0.75 : 0.75}
				position={window.innerWidth < 500 ? [-5, -3, -2.4] : [0, -3.25, -1.5]}
				rotation={[0, -0.2, -0.1]}
			/>
		</group>
	);
};

const ComputerCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 500px)');
		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (e) => {
			setIsMobile(e.matches);
		}

		mediaQuery.addEventListener('change', handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange);
		}
	}, []);

	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enablePan={false}
					enableZoom={false}
					enableDamping
					dampingFactor={0.2}
					rotateSpeed={-0.5}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputerCanvas;
