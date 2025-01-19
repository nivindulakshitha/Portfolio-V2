import { OrbitControls, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import Loader from './Loader';
import Model from '../../public/models/Model';


const Developer = ({ isContactVisible = false }) => {
    const [gotCatch, setGotCatch] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');
        setIsMobile(mediaQuery.matches);
    }, []);

    useEffect(() => {
        if (isContactVisible) {
			setGotCatch(true);
		}
    }, [isContactVisible]);

    return (
        <div className="w-full z-0 absolute right-0 bottom-0 h-full">
            <Canvas
                camera={{ position: [isMobile ? 50 : 550, 10, 500], fov: gotCatch ? 10 : 8 }}
                shadows
                gl={{ antialias: true, preserveDrawingBuffer: true, powerPreference: 'low-power', alpha: true }}
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
                    <Model
                        scale={isMobile ? 0.8 : gotCatch ? 1 : 1.3}
                        position-y={gotCatch ? (isMobile ? -1.3 : -1) : -1.2}
                        position-x={isMobile ? 0 : gotCatch ? 1.5 : 2.5}
                        gotCatch={gotCatch}
                        isMobile={isMobile}
                    />
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