import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { styles } from "../styles"
import { github } from "../assets"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({ index, name, title, description, tech, link, tags }) => {
	return (
		<motion.div variants={fadeIn("up", "sprint", index * 0.5, 0.75)}>
			
		</motion.div>
	)
}

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My works</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.div
					varients={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[16px] max-w-3xl leading-[30px]"
				>
					Following are some of the projects I have worked on. You can find more of my projects on my GitHub profile.
				</motion.div>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{
					projects.map((project, index) => {
						return (
							<ProjectCard key={index} {...project} index={index} />
						)
					})
				}
			</div>
		</>
	)
}

export default SectionWrapper(Works, "works")