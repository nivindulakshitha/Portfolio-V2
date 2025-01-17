import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component, idname) =>
	function HOC() {
		return (
			<motion.section
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
				id={idname}
				viewport={{once: true, amount: 0.25}}
			>
				<span className='hash-span' id={idname}>&nbsp;</span>
				<Component />
			</motion.section>
		)
	}

export default SectionWrapper