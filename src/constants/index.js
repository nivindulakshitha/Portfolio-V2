import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
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
		name: "Redux Toolkit",
		icon: redux,
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
];

const experiences = [
	{
		title: "React.js Developer",
		company_name: "Starbucks",
		icon: starbucks,
		iconBg: "#383E56",
		date: "March 2020 - April 2021",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "React Native Developer",
		company_name: "Tesla",
		icon: tesla,
		iconBg: "#E6DEDD",
		date: "Jan 2021 - Feb 2022",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Web Developer",
		company_name: "Shopify",
		icon: shopify,
		iconBg: "#383E56",
		date: "Jan 2022 - Jan 2023",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Full stack Developer",
		company_name: "Meta",
		icon: meta,
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Present",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

const projects = [
	{
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];

const myProjects = [
    {
        title: 'Podcastr - AI Podcast Platform',
        desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
        subdesc:
            'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
        href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
        texture: '/textures/project/project1.mp4',
        logo: '/projects/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: 'projects/lights/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/projects/languages/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'projects/languages/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/projects/languages/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/projects/languages/framer.svg',
            },
        ],
    },
    {
        title: 'LiveDoc - Real-Time Google Docs Clone',
        desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
        subdesc:
            'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
        href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        texture: '/textures/project/project2.mp4',
        logo: '/projects/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: 'projects/lights/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/projects/languages/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'projects/languages/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/projects/languages/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/projects/languages/framer.svg',
            },
        ],
    },
    {
        title: 'CarePulse - Health Management System',
        desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
        subdesc:
            'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
        href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        texture: '/textures/project/project3.mp4',
        logo: '/projects/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: 'projects/lights/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/projects/languages/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'projects/languages/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/projects/languages/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/projects/languages/framer.svg',
            },
        ],
    },
    {
        title: 'Horizon - Online Banking Platform',
        desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
        subdesc:
            'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
        href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
        texture: '/textures/project/project4.mp4',
        logo: '/projects/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: 'projects/lights/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/projects/languages/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'projects/languages/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/projects/languages/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/projects/languages/framer.svg',
            },
        ],
    },
    {
        title: 'Imaginify - AI Photo Manipulation App',
        desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
        subdesc:
            'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
        href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
        texture: '/textures/project/project5.mp4',
        logo: '/projects/project-logo5.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: 'projects/lights/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/projects/languages/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'projects/languages/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/projects/languages/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/projects/languages/framer.svg',
            },
        ],
    },
];

export { services, technologies, experiences, projects, myProjects };