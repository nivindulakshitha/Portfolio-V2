import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TipsAssistant = ({ isContactVisible }) => {
	const [freezed, setFreezed] = useState(false);

	useEffect(() => {
		setFreezed(isContactVisible);
	}, [isContactVisible]);

	const tips = [
		"Welcome to my portfolio! Explore my portfolio using the menu above.",
		"Check out the Projects section to see my latest work.",
		"For the best experience, view this portfolio on a laptop or desktop computer.",
		"If the 3D models disappear suddenly, try refreshing the page.",
		"You can have my CV in the navigation menu. Just check it out!",
		"You can contact me through the Contact section at the bottom of the page.",
		"Feel free to interact with the 3D objects whenever possible!"
	];

	const [currentTipIndex, setCurrentTipIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (freezed) return;
			setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
		}, 10000);

		return () => clearInterval(interval);
	}, [tips.length, freezed]);

	return (
		<motion.div
			className="fixed bottom-6 right-6 z-10 min-h-[60px] flex flex-row-reverse items-center rounded-lg p-4 max-w-xs cursor-pointer"
			drag="y"
			dragConstraints={{ top: -200, bottom: window.innerHeight - 300}}
			dragElastic={0.3}
			dragMomentum={false}
			whileDrag={{ scale: 1.03 }}
			transition={{ type: "spring", stiffness: 100, damping: 25, duration: 0.2 }}
		>
			<div className="relative w-12 h-12 rounded-full overflow-hidden ml-3 bg-primary bg-opacity-90 cursor-default">
				<img
					src="/models/nivindulakshitha.png"
					alt="Assistant"
					className="relative z-10 w-full h-[210%] object-cover rounded-full"
				/>
			</div>

			<div className="flex-1 bg-primary rounded-lg p-2 bg-opacity-90">
				<p className="text-white text-sm font-medium">
					{freezed ? (
						<>
							You have reached the end of my portfolio. I am feeling confident and want to see how much?
							<a
								onClick={() => {
									window.scrollTo(0, 0);
									setFreezed(false);
								}}
								className="cursor-pointer"
							>
								<span className="text-[#915EFF]"> Click here! </span>
							</a>
						</>
					) : tips[currentTipIndex]}
				</p>
			</div>
		</motion.div>
	);
};

export default TipsAssistant;