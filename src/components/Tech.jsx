import React, { useState, useEffect } from 'react'
import { BallCanvas } from "./canvas"
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
	const isMobile = window.matchMedia("(max-width: 500px)").matches;
	const [showTech, setShowTech] = useState(false); // State to control when to render BallCanvas

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowTech(true); // Start rendering after 3 seconds
		}, 10000);

		return () => clearTimeout(timer); // Cleanup the timer on component unmount
	}, []);

	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{/* Conditionally render BallCanvas components after the delay */}
			{showTech && 
				(isMobile ? technologies.slice(6, -1) : technologies).map((tech, index) => {
					return (
						<div className="w-28 h-28" key={index}>
							<BallCanvas tech={tech} icon={tech.icon} />
						</div>
					)
				})
			}
		</div>
	)
}

export default SectionWrapper(Tech, "");
