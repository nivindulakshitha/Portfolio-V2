/* eslint-disable react/prop-types */
import React from 'react'
import { motion } from 'framer-motion'
import { Title } from 'react-title'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Title className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
			>
				<div
					// eslint-disable-next-line react/no-unknown-property
					options={{ max: 45, scale: 1, speed: 450 }}
					className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly flex-col'
				>

					<img src={icon} alt={title} className='w-16 h-16 object-contain' />
					<h3 className=''>{ title }</h3>
				</div>
			</motion.div>
		</Title>
	)
}

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>Introduction</p>
				<h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
			</motion.div>

			<motion.p variants={fadeIn("", "", 0.1, 1)} className='text-secondary font-medium text-[16px] mt-4 max-w-3xl leading-[30px]'>
				I&apos;m skilled in front-end development, with a strong foundation in web technologies. I have a passion for creating responsive, user-friendly websites and applications. I&apos;m always eager to learn new technologies and improve my skills. I&apos;m a team player and I&apos;vm always ready to collaborate with other developers to create amazing products.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{
					services.map((service, index) => (
						<ServiceCard key={index} index={index} {...service} />
					))
				}
			</div>
		</>
	)
}

export default About