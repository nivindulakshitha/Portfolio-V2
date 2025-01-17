import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, ComputersCanvas } from './components'
import Projects from './components/Projects'

function App() {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary select-none">
				<div className="bg-hero bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Tech />
				<Works />
				<Experience />
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
