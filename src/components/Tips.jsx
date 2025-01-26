import { useState, useEffect } from "react";
import  {motion} from "framer-motion";

const TipsAssistant = () => {
	const tips = [
		"Hi! Welcome to my portfolio. Explore my work using the menu above.",
		"Check out the projects section to see my latest work!",
		"You can contact me through the Contact section below.",
		"Tip: My portfolio is fully responsive. Try resizing the window!",
	];

	const [currentTipIndex, setCurrentTipIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
		}, 10000);

		return () => clearInterval(interval);
	}, [tips.length]);

	return (
		<div className="fixed bottom-6 right-6 z-50 min-h-[60px] flex flex-row-reverse items-center shadow-lg rounded-lg p-4 max-w-xs">
			{/* Avatar with ripple animation */}
			<div className="relative w-12 h-12 rounded-full overflow-hidden ml-3">
				<img
					src="/models/nivindulakshitha.png"
					alt="Assistant"
					className="relative z-10 w-full h-[210%] object-cover rounded-full"
				/>
			</div>

			{/* Tip Content */}
			<div className="flex-1 bg-primary rounded-lg p-2 bg-opacity-90">
				<motion.div
					className="absolute inset-0 rounded-full bg-white bg-opacity-10"
					initial={{ scale: 1, opacity: 0.5 }}
					animate={{
						scale: [1, 1.1, 1],
						opacity: [0.5, 0],
					}}
					transition={{
						duration: 3.5,
						ease: "easeOut",
						repeat: Infinity,
						repeatType: "loop",
					}}
				/>
				<p className="text-white text-sm font-medium">
					{tips[currentTipIndex]}
				</p>
			</div>
		</div>
	);
};

export default TipsAssistant;
