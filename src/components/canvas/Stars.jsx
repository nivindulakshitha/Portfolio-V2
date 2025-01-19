import { PointMaterial, Points, Preload } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { div } from 'framer-motion/client'
import React, { Suspense, useRef, useState } from 'react'
import * as random from 'maath/random/dist/maath-random.esm'


const Stars = () => {
	return (
		<div>Stars</div>
	)
}

const StarsCanvas = () => {
	return (
		<div className="w-full h-full absolute inset-0 z-[-1]">
			<Canvavs>

			</Canvavs>
		</div>
	)
}

export default Stars