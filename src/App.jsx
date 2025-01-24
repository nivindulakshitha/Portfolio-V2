import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Hero, Navbar, Tech, StarsCanvas } from './components'
import Projects from './components/Projects'
import Loading from './components/Loading'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
	const [doneLoading, setDoneLoading] = useState(false)

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

				{/* Main Content */}
				<div className="bg-hero bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Tech />
				<Projects />
				<Experience />
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App