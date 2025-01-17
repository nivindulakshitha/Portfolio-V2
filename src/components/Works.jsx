import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { styles } from "../styles"
import { github } from "../assets"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { p } from "framer-motion/client"

const ProjectCard = ({ index, name, title, description, tech, link, tags, image }) => {
	return (
		<motion.div variants={fadeIn("up", "sprint", index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[230px]">
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover rounded-2xl"
					/>

					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<div onClick={() => window.open(link, "_blank")} className="flex items-center justify-center w-10 h-10 black-gradient rounded-full cursor-pointer">
							<img src={github} alt="Github" className="w-1/2 h-1/2 object-contain" />
						</div>
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{
						tags.map((tag, index) => {
							return (
								<p key={index} className={`text-[14px] ${tag.color}`}>
									#{tag.name}
								</p>
							)
						})
					}
				</div>
			</Tilt>
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