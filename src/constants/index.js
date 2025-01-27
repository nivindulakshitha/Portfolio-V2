import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	reactjs,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	threejs,
	python,
	gcp,
	github,
	usjp,
	boc,
	usv,
	pcc
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "milestones",
		title: "Milestones",
	},
	{
		id: "technoloies",
		title: "Technologies",
	},
	{
		id: "projects",
		title: "Projects",
	},	
	{
		id: "contact",
		title: "Contact",
	}
	,
	{
		id: "cv",
		title: "My CV",
	},
];

const services = [
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Frontend Developer",
		icon: creator,
	},
	{
		title: "Mobile App Developer",
		icon: mobile,
	},
	{
		title: "DevOps Enthisiast",
		icon: web,
	}
];

const technologies = [
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
	{
		name: "python",
		icon: python,
	},
	{
		name: "gcp",
		icon: gcp,
	}
];

const shorted_technologies = [
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "python",
		icon: python,
	},
	{
		name: "gcp",
		icon: gcp,
	}
];

const experiences = [
	{
		title: "Undergraduate",
		company_name: "Univevrity of Sri Jayewardenepura",
		icon: usjp,
		iconBg: "#383E56",
		date: "October 2021 - Current",
		points: [
			"Undergraduate in Information and Communication Technology honors degree",
		],
	},
	{
		title: "Open Source Contributor",
		company_name: "GitHub",
		icon: github,
		iconBg: "#383E56",
		date: "August 2021 - Current",
		points: [
			"60+ open source projects contributed",
			"130 stargazers earned",
			"2500+ contributions"
		],
	},
	{
		title: "Trainee",
		company_name: "Bank of Ceylon",
		icon: boc,
		iconBg: "#383E56",
		date: "February 2021 - August 2021",
		points: [
			"06 months of training",
		],
	},
	{
		title: "Student",
		company_name: "Udabalawala College of Kurunegala",
		icon: usv,
		iconBg: "#383E56",
		date: "June 2018 - December 2020",
		points: [
			"Passed G.C.E. Advanced Level Examination",
		],
	},
	{
		title: "Student",
		company_name: "Pimburuwellegama College of Kurunegala",
		icon: pcc,
		iconBg: "#383E56", // light - E6DEDD
		date: "January 2005 - December 2017",
		points: [
			"Passed G.C.E. Ordinary Level Examination",
		],
	},
];

const projects = [
	{
		title: 'Readme API - Show your top 10 collaborators',
		desc: 'Developed a customizable API to generate contributor images for GitHub profile README files, showcasing the top 10 contributors in an engaging way.',
		href: 'https://github.com/nivindulakshitha/My-Contributors',
		texture: '/computer/contributors.mp4',
		logo: 'https://skillicons.dev/icons?i=ts',
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		spotlight: 'projects/lights/blue.png',
		/* 
		{
				id: 1,
				name: 'React.js',
				path: '/projects/languages/react.svg',
			},
		 */
		tags: [],
		techs_url: 'https://skillicons.dev/icons?i=md,nextjs,react,tailwind'
	},
	{
		title: 'Plugin for Vite developers',
		desc: 'Created a Vite plugin that generates QR codes for network URLs during development, enabling quick and easy mobile access. Published as an npm package for seamless integration into Vite-based projects.',
		href: 'https://github.com/nivindulakshitha/vinetqr.dev',
		texture: '/computer/vinetqr.mp4',
		logo: 'https://skillicons.dev/icons?i=vite',
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		spotlight: 'projects/lights/pink.png',
		tags: [],
		techs_url: 'https://skillicons.dev/icons?i=js,npm'
	},
	{
		title: 'Power outage notification system',
		desc: 'Developed a desktop application to provide timely notifications about scheduled power outages when the economic crisis time period in the Sri Lanka 2022, helping users prepare for electricity blackouts. ',
		href: 'https://github.com/nivindulakshitha/Power-Outage',
		texture: '/computer/power-cut.mp4',
		logo: 'https://skillicons.dev/icons?i=js',
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		spotlight: 'projects/lights/green.png',
		tags: [],
		techs_url: 'https://skillicons.dev/icons?i=react,bootstrap,jquery'
	},
	{
		title: 'iPhone 15 Pro 3D website clone',
		desc: 'Recreated the iPhone 15 Pro 3D website from scratch, delivering an immersive and interactive user experience. Built using React and Three.js for advanced 3D animations and visual effects.',
		href: 'https://github.com/nivindulakshitha/Apple',
		texture: '/computer/iphone.mp4',
		logo: 'https://skillicons.dev/icons?i=react',
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		spotlight: 'projects/lights/blue.png',
		tags: [],
		techs_url: 'https://skillicons.dev/icons?i=js,threejs,tailwindcss'
	},
	{
		title: 'Movie Land',
		desc: 'Check out Movie Land, a dynamic movie-searching app I built using React. It lets you browse movies by title, fetches real-time data via APIs, and delivers a seamless user experience.',
		href: 'https://github.com/nivindulakshitha/Movie-Land',
		texture: '/computer/movie-land.mp4',
		logo: 'https://skillicons.dev/icons?i=react',
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		spotlight: 'projects/lights/blue.png',
		tags: [],
		techs_url: 'https://skillicons.dev/icons?i=css,postman'
	},
	{
		title: 'Hutch mobile app redesign concept',
		desc: 'Using Figma, I aimed to create a modern, user-friendly interface that enhances the overall experience while maintaining a clean and vibrant aesthetic.',
		href: 'https://www.figma.com/proto/qgyxGcCEGKqGGx03i0ZG3b/Hutch-Redesigned?node-id=1-3&t=t5yWMrudLZuSTrML-1',
		texture: '/computer/hutch-redesign.mp4',
		logo: 'https://skillicons.dev/icons?i=figma',
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		spotlight: 'projects/lights/pink.png',
		tags: [],
		techs_url: ''
	},
	{
		title: 'Sri Lanka Flag Animation',
		desc: 'a tribute to the vibrant spirit of Sri Lanka! Using only HTML5 and CSS3, this project brings the a flag to life with smooth, dynamic animations—no JavaScript or external libraries involved!',
		href: 'https://github.com/nivindulakshitha/Flag-Animation',
		texture: '/computer/flag-animation.mp4',
		logo: 'https://skillicons.dev/icons?i=css',
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		spotlight: 'projects/lights/pink.png',
		tags: [],
		techs_url: 'https://skillicons.dev/icons?i=html'
	},
	{
		title: 'Netflix-UI project',
		desc: 'I’ve cloned the Netflix landing page using HTML5 and CSS3. This project is a great example of creating modern web interfaces with a clean, visually appealing design.',
		href: 'https://github.com/nivindulakshitha/Netflix-UI',
		texture: '/computer/netflix-ui.mp4',
		logo: 'https://skillicons.dev/icons?i=css',
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		spotlight: 'projects/lights/pink.png',
		tags: [],
		techs_url: 'https://skillicons.dev/icons?i=html'
	},
	{
		title: 'Audi-UI, a front-end project replicating the sleek landing page of the Audi Sri Lanka website!',
		desc: "Built using HTML5 and CSS3, this project showcases attention to design detail and responsive web development skills.It's a visually appealing and lightweight clone, perfect for exploring UI design techniques.",
		href: 'https://github.com/nivindulakshitha/Audi-UI',
		texture: '/computer/audi-ui.mp4',
		logo: 'https://skillicons.dev/icons?i=css',
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		spotlight: 'projects/lights/blue.png',
		tags: [],
		techs_url: 'https://skillicons.dev/icons?i=html'
	},
	{
		title: 'Spotify-UI, my project inspired by the sleek and iconic Spotify web player interface! ',
		desc: "Crafted entirely with HTML5 and CSS3, this project captures the essence of modern web design. While it’s not yet responsive, it’s a bold step towards mastering UI replication and front-end development. ",
		href: 'https://github.com/nivindulakshitha/Spotify-UI',
		texture: '/computer/spotify-ui.mp4',
		logo: 'https://skillicons.dev/icons?i=css',
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		spotlight: 'projects/lights/green.png',
		tags: [],
		techs_url: 'https://skillicons.dev/icons?i=html'
	}
];

export { services, technologies, experiences, projects, shorted_technologies };