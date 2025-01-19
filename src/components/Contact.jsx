import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

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

		emailjs.send('service_3bncnz9', 'template_riosk7t', {
			from: form.name,
			to: 'Nivindu Lakshitha',
			from_email: form.email,
			to_email: 'nivindulakshitha@gmail.com',
			message: form.message
		},
		'O21cL1VZ5v6FSk0lO').then(() => {
			setLoading(false);
			alert("Thank you. I will get back to you as soon as possible.")
			setForm({
				message: ''
			})
		}).catch(error => {
			alert("Something went wrong! Try again.")
		})
	}

	return (
		<div id='contact' className="flex flex-col-reverse gap-10 xl:mt-12 xl:flex-row overflow-hidden">
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className='flex-[0.75] bg-black-100 rounded-2xl p-8'
			>
				<p className={styles.sectionSubText}>Get in touch</p>
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
					<button type='submit' className='bg-tertiary py-3  px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
						{
							!loading ? "Send Message" : "Sending..."
						}
					</button>
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