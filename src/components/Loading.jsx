import { useProgress } from '@react-three/drei'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Loading = ({ setDoneLoading }) => {
	const { progress } = useProgress()
	const [readyToFade, setReadyToFade] = useState(false)

	useEffect(() => {
		// Once progress reaches 100, prepare for fade-out
		if (progress >= 100) {
			setTimeout(() => {
				setReadyToFade(true) // Allow animation to start
			}, 5000) // Add slight delay for polish
		}
	}, [progress])

	useEffect(() => {
		// Notify parent when the fade-out animation is done
		if (readyToFade) {
			setTimeout(() => {
				setDoneLoading(true)
			}, 1500) // Matches the duration of the fade-out
		}
	}, [readyToFade, setDoneLoading])

	// Variants for the text animations
	const textVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.3, // Delay each line slightly
				duration: 0.6,
				ease: 'easeInOut',
			},
		}),
	}

	// Variants for the progress bar
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

	// Variants for the image animation
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
			className="relative flex sm:flex-row items-end justify-center flex-wrap h-screen w-screen pointer-events-none flex-col"
			initial="hidden"
			animate="visible"
		>
			<div className="flex flex-col items-start justify-center h-screen">
				{['a bit d!fferent', 'can make a', '<span class="underline">profound</span> impact.'].map(
					(text, index) => (
						<motion.p
							key={index}
							className="loading-text"
							variants={textVariants}
							custom={index} // Pass index for staggered animation
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
			</div>
			{/* <motion.img
				src="./models/nivindulakshitha.png"
				className="bottom-0 right-0 h-auto min-w-[555px] sm:block"
				alt="model"
				variants={imageVariants}
			/> */}
		</motion.section>
	)
}

export default Loading
