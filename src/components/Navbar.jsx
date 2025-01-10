import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
	const [active, setActive] = useState("")

	return (
		<nav className={`
			${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20
			${styles.bgPrimary}
		`}>
			<div className="w-full flex items-center justify-between max-w-7xl mx-auto">
				<Link 
					to="/"
					className='flex items-center gap-2'
					onClick={() => {
						setActive("")
						window.scrollTo(0, 0)
					}}
				/>

				<img src={logo} alt="logo" className="h-9 w-9 object-contain" />
			</div>
		</nav>
	)
}

export default Navbar