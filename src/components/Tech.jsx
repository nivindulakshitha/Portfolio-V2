import React from 'react'
import { BallCanvas } from "./canvas"
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { div } from 'framer-motion/client'

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{ 
				technologies.map((tech, index) => {
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