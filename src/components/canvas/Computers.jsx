/* eslint-disable react/no-unknown-property */
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = () => {
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
				scale={0.75}
				position={[0, -3.25, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</group>
	);
};

const ComputerCanvas = () => {
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
					rotateSpeed={0.5}
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
