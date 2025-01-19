import React, { useState, useEffect } from 'react'
import { BallCanvas } from "./canvas"
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { motion } from "framer-motion"
import { textVariant } from '../utils/motion'
import { styles } from '../styles'

const Tech = () => {
	const isMobile = window.matchMedia("(max-width: 500px)").matches;

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Working with variety of projects, I experienced thse </p>
				<h2 className={styles.sectionHeadText}>Tech Stack.</h2><br />
			</motion.div>
			<div className="flex flex-row flex-wrap justify-center gap-10">
				{
					(isMobile ? technologies.slice(8, -1) : technologies.slice(1, -1)).map((tech, index) => {
						return (
							<div className="w-28 h-28" key={index}>
								<BallCanvas tech={tech} icon={tech.icon} />
							</div>
						)
					})
				}
			</div>
		</>
	)
}

export default SectionWrapper(Tech, "");
