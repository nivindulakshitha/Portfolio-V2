import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
	const formRef = useRef()
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: ''
	})
	const [loading, setLoading] = useState(false)

	const handleChange = (e) => {
		const {name, value} = e.target;

		setForm({...form, [name]:value})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs.send(SERVICE_ID, TEMPLATE_ID, {
			from: form.name,
			to: 'Nivindu Lakshitha',
			from_email: form.email,
			to_email: 'nivindulakshitha@gmail.com',
			message: form.message
		},
		PUBLIC_KEY).then(() => {
			setLoading(false);
			alert("Thank you. I will get back to you as soon as possible.")
			setForm({
				message: ''
			})
		}).catch(() => {
			alert("Something went wrong! Try again.")
			setForm({
				message: ''
			})
			setLoading(false)
		})
	}

	return (
		<div id='contact' className="flex flex-col-reverse gap-10 xl:mt-12 xl:flex-row overflow-hidden">
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className='flex-[0.75] bg-black-100 rounded-2xl p-8'
			>
				<p className={styles.sectionSubText}>Get in touch &</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>
				<form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your Name</span>
						<input type='text' value={form.name} name='name' onChange={handleChange} placeholder="What's your name?" className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your Email</span>
						<input type='email' value={form.email} name='email' onChange={handleChange} placeholder="What's your email?" className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your Message</span>
						<textarea rows={7} value={form.message} name='message' onChange={handleChange} placeholder="What do you want to say?" className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'/>
					</label>
					<div className="flex gap-10 flex-row justify-between items-center flex-wrap">
						<button type='submit' className='bg-tertiary py-3  px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
							{
								!loading ? "Send Message" : "Sending..."
							}
						</button>
						<div className="flex gap-8 items-center">
							<a href="https://www.linkedin.com/in/nivindulakshitha" target="_blank">
								<img src="./socials/linkedin.svg" alt="LibkedIn" className="w-[40px] h-[40px] cursor-pointer p-[6px]" />
							</a>

							<a href="https://github.com/nivindulakshitha" target="_blank">
								<img src="./socials/github.png" alt="GitHub" className="w-[40px] h-[40px] cursor-pointer" />
							</a>

							<a href="mailto:nivindulakshitha@gmail.com" target="_blank">
								<img src="./socials/email.svg" alt="Email" className="w-[40px] h-[40px] cursor-pointer p-[2px]" />
							</a>
						</div>
					</div>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
			>
				<EarthCanvas />
			</motion.div>
		</div>
	)
}

export default SectionWrapper(Contact, 'contact')