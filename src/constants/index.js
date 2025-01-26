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
		points: [],
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
		points: [],
	},
	{
		title: "Student",
		company_name: "Udabalawala College of Kurunegala",
		icon: usv,
		iconBg: "#383E56",
		date: "June 2018 - December 2020",
		points: [],
	},
	{
		title: "Student",
		company_name: "Pimburuwellegama Collage of Kurunegala",
		icon: pcc,
		iconBg: "#383E56", // light - E6DEDD
		date: "January 2005 - December 2017",
		points: [],
	},
];

const projects = [
	{
		title: 'Readme API - Show your top 10 collaborators',
		desc: 'Developed a customizable API to generate contributor images for GitHub profile README files, showcasing the top 10 contributors in an engaging way.',
		href: 'https://github.com/nivindulakshitha/My-Contributors',
		texture: '/computer/contributors.mp4',
		logo: 'https://skillicons.dev/icons?i=md',
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
		techs_url: 'https://skillicons.dev/icons?i=ts,nextjs,react,tailwind'
	}
];

export { services, technologies, experiences, projects, shorted_technologies };