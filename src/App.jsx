import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Hero, Navbar, Tech, StarsCanvas, Projects, Loading } from './components'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TipsAssistant from './components/Tips'
/* import Draggable from 'react-draggable'; */

function App() {
	const [doneLoading, setDoneLoading] = useState(false)
	const [isContactVisible, setIsContactVisible] = useState(false); 

	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary select-none">
				<AnimatePresence>
					{!doneLoading && (
						<motion.div
							className="bg-hero bg-primary bg-cover bg-no-repeat bg-center z-50 fixed w-screen h-screen"
							initial={{ opacity: 1 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 1.5 }}
						>
							<Loading setDoneLoading={setDoneLoading} />
						</motion.div>
					)}
				</AnimatePresence>

				<div className="bg-hero bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero isContactVisible={isContactVisible} setIsContactVisible={setIsContactVisible} />
				</div>
				<About />
				<TipsAssistant isContactVisible={isContactVisible} />
				{/* <Draggable>
					<div style={{ position: 'absolute', zIndex: 1000 }}>
						<TipsAssistant isContactVisible={isContactVisible} />
					</div>
				</Draggable> */}
				<Experience />
				<Tech />
				<Projects />
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App