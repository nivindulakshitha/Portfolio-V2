import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { menu, close } from '../assets'
import { motion } from 'framer-motion'

const variants = {
	hidden: { opacity: 0, y: -20 },
	visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
	const [active, setActive] = useState("")
	const [toggle, setToggle] = useState(false)
	const location = useLocation()

	useEffect(() => {
		setActive(location.hash.slice(1))
	}, [location])

	return (
		<nav className={`
			${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20
			${styles.bgPrimary} select-none bg-primary bg-opacity-70 rounded-md
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

					<img src={"https://media.licdn.com/dms/image/v2/D5603AQEn4f6FH45IiQ/profile-displayphoto-shrink_200_200/B56ZSXgSa6HoAY-/0/1737708611693?e=1743033600&v=beta&t=96O1xvSFCYttmcguVhXDZk1xpcw58PoIjgszkDngoLg"} alt="logo" className="h-9 w-9 object-contain rounded-full" />
					<p className='text-white text-[18px] font-bold cursor-pointer flex'>Nivindu &nbsp;<span className='sm:block hidden'>Lakshitha</span></p>
				</Link>
				<ul className="list-none hidden lg:flex flex-row gap-10">
					{
						navLinks.map(link => (
							<li key={link.id}
								className={`${active === link.id ? 'text-white' : 'text-secondary'} whitespace-nowrap cursor-pointer hover:text-white text-[18px] font-medium`}
								onClick={() => { setActive(link.id) }}
							>
								{
									link.id === 'cv' ? (
										<a href="./Nivindu Lakshitha CV.pdf" target="_blank">{link.title}</a>
									) : (
										<a href={`#${link.id}`}>{link.title}</a>
									)
								}
							</li>
						))
					}
				</ul>

				<div className="lg:hidden flex flex-1 justify-end items-center">
					<img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] cursor-pointer object-contain'
						onClick={() => setToggle(!toggle)}
					/>

					<motion.div
						variants={variants}
						initial="hidden"
						animate={toggle ? "visible" : "hidden"}
						className="p-6 bg-primary shadow-sm shadow-gray-700  absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
					>
						<ul className="list-none flex justify-end items-start flex-col gap-4">
							{navLinks.map(link => (
								<li
									key={link.id}
									className={`${active === link.id ? 'text-white' : 'text-secondary'} cursor-pointer hover:text-white text-[16px] font-medium`}
									onClick={() => {
										setActive(link.id);
										setToggle(!toggle);
									}}
								>
									{
										link.id === 'cv' ? (
											<a href="./Nivindu Lakshitha CV.pdf" target="_blank">{link.title}</a>
										) : (
											<a href={`#${link.id}`}>{link.title}</a>
										)
									}
								</li>
							))}
						</ul>
					</motion.div>

				</div>
			</div>
		</nav>
	)
}

export default Navbar