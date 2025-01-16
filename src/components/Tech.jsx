import React from 'react'
import { BallCanvas } from "./canvas"
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
	const isMobile = window.matchMedia("(max-width: 500px)").matches;

	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{ 
				//TODO: Currently, last first 5 technologies are displayed. 
				(isMobile ? technologies.slice(5, -1) : technologies).map((tech, index) => {
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