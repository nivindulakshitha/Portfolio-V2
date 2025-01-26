import { useProgress } from '@react-three/drei'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Loading = ({ setDoneLoading }) => {
	const { progress } = useProgress()
	const [readyToFade, setReadyToFade] = useState(false)

	useEffect(() => {
		
		if (progress >= 100) {
			setTimeout(() => {
				setReadyToFade(true) 
			}, 3000) 
		}
	}, [progress])

	useEffect(() => {
		
		if (readyToFade) {
			setTimeout(() => {
				setDoneLoading(true)
			}, 1000) 
		}
	}, [readyToFade, setDoneLoading])

	
	const textVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.3, 
				duration: 0.6,
				ease: 'easeInOut',
			},
		}),
	}

	
	const progressVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.6,
				ease: 'easeInOut',
			},
		},
	}

	
	const imageVariants = {
		hidden: { opacity: 0, x: 100 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: 'easeInOut',
			},
		},
	}

	return (
		<motion.section
			className="relative flex flex-row items-end h-screen w-screen pointer-events-none px-10 justify-center"
			initial="hidden"
			animate="visible"
		>
			<div className="flex flex-col justify-center h-screen sm:me-0 md:me-[250px] xl:me-[275px] items-center z-10">
				{['a bit d!fferent', 'can make a', '<span class="underline">profound</span> impact.'].map(
					(text, index) => (
						<motion.p
							key={index}
							className="loading-text"
							variants={textVariants}
							custom={index} 
							dangerouslySetInnerHTML={{ __html: text }}
						/>
					)
				)}
				<motion.p
					className="mt-20 text-xl color-[#F1F1F1] font-bold pl-3"
					variants={progressVariants}
				>
					{progress >= 100 ? (
						<>
							<span>Loading: </span>
							<span>Initializing...</span>
						</>
					) : (
						<>
							<span>Loading: </span>
							<span>{progress.toFixed(0)}%</span>
						</>
					)}
				</motion.p>
				<motion.div className="max-w-[450px] bg-secondary bg-opacity-10 rounded-xl text-center mt-20 p-3" variants={progressVariants}>
					<p className="text-white text-[14px] cursor-pointer flex">
						Note: 3D models use browser&apos;s WebGL API and device GPU processor to render the model. It may take a while to load and it may freeze the browser for a while in some cases. Please be patient. It is recommended to view this website on a desktop or laptop for the best experience.
					</p>
				</motion.div>
			</div>
			<motion.img
				className="bottom-0 right-0 h-auto w-[555px] absolute max-h-[80%] max-w-[80%] object-contain hidden md:block z-0"
				src="./models/nivindulakshitha.png"
				alt="model"
				variants={imageVariants}
			/>
		</motion.section>
	)
}

export default Loading
