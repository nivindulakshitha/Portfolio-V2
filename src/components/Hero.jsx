import { motion } from 'framer-motion';
import { styles } from '../styles';
import Developer from './Developer';
import { useEffect, useState } from 'react';

const Hero = () => {
	const [isContactVisible, setIsContactVisible] = useState(false);
	const [isMobile, setIsMobile] = useState(true);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 500px)');
		setIsMobile(mediaQuery.matches);
	}, []);

	useEffect(() => {
		const contactSection = document.querySelector('#contact');
		if (!contactSection) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setIsContactVisible(entry.isIntersecting);
				});
			},
			{ threshold: 0.5 } // Trigger when 50% of the section is visible
		);

		observer.observe(contactSection);

		return () => {
			observer.disconnect();
		};
	}, []);

	return (

		<section className="relative w-full h-screen mx-auto">
			<Developer isContactVisible={isContactVisible} />
			<div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915EFF]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>

				<div>
					<h1 className={`${styles.heroHeadText}`}>
						Hi, I&apos;m <span className="text-[#915EFF]">Lakshitha</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						Building Full Stack solutions with a focus on <br className="sm:block hidden" /> problem-solving and teamwork!
					</p>
					{
						!isMobile && (
							<p className={`text-md mt-2 text-justify max-w-[500px] text-secondary`}>
								My projects reflect a high level of proficiency in leveraging modern tools and technologies such as React, Ballerina, MongoDB, Python and Docker to build scalable and impactful solutions.
							</p>
						)
					}
				</div>
			</div>

			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex items-start justify-center p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
							className="w-3 h-3 bg-secondary rounded-full mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;