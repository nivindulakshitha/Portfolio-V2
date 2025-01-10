import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
	const [active, setActive] = useState("")
	const [toggle, setToggle] = useState(false)

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
				>

					<img src={logo} alt="logo" className="h-9 w-9 object-contain" />
					<p className='text-white text-[18px] font-bold cursor-pointer'>Nivindu <span className='sm:block hidden'>Lakshitha</span></p>
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
					{
						navLinks.map(link => (
							<li key={link.id}
								className={`${active === link.id ? 'text-white' : 'text-secondary'} cursor-pointer hover:text-white text-[18px] font-medium`}
								onClick={() => { setActive(link.id)}}
							>
								<a href={`#${link.id}`}>{ link.title }</a>
							</li>
						))
					}
				</ul>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img src={menu} alt="menu" className='w-[28px] h-[28px] cursor-pointer object-contain'
						onClick={() => setToggle(!toggle)}
					/>
				</div>
			</div>
		</nav>
	)
}

export default Navbar