import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'frontend-developer-2',
		company: 'Diligent Corporation',
		description:
			'Developing a Google Drive-esque file sharing web application in React + TypeScript.',
		contract: ContractType.Hybrid,
		type: 'Software Development',
		location: 'Budapest, Hungary',
		period: { from: new Date(2022, 2, 1), to: new Date() },
		skills: getSkills('ts', 'js', 'reactjs', 'redux', 'jest', 'nightwatch', 'gha', 'git', 'docker'),
		name: 'Senior Frontend Developer',
		color: 'yellow',
		links: [],
		logo: Assets.ReactJs,
		shortDescription: `Developing **Secure File Sharing**, a Google Drive-like file sharing web application focused on security. The app is developed in **React**
		+ **TypeScript**, serving thousands of users.
		<br>* Optimized the application to run seamlessly for over 3000 users by refactoring large portions and migrating to React 18.
		<br>* Containerized our separate environments using **Docker** that sped up development speed by 20%.
		<br>* Introduced styled components and implemented an internal design system to improve cooperation with the designer team, and to
		speed up the development by 20%.
		<br>* Improved the test coverage by 35% through the introduction of component- and unit tests.
		<br>* Made the client application Web Accessibility WCAG 2.1 compliant.
		<br>* Introduced Google code review standards within the team.
		<br>* Mentored junior developers and interns.`,
		href: '',
		img: ''
	},
	{
		slug: 'fullstack-developer-3',
		company: 'Budapest Bank / OTP Bank',
		description: 'Front-end development on a netbank application in React + TypeScript.',
		contract: ContractType.Remote,
		type: 'Software Development',
		location: 'Budapest, Hungary',
		period: { from: new Date(2021, 0, 1), to: new Date(2022, 2, 1) },
		skills: getSkills('java', 'nodejs', 'ts', 'js', 'mongodb', 'reactjs', 'redux', 'git'),
		name: 'Full Stack Developer',
		color: 'red',
		links: [],
		logo: Assets.ReactJs,
		shortDescription: `**Full stack development on one of Hungary’s largest netbank applications** (**Spring/React** + **TypeScript**), serving hundreds of
		thousands of users.
		<br>* Feature development on authentication/authorization microservices that sped up the authentication/authorization process by 30%.
		<br>* Wrote new microservices and refactored existing ones from **Java** as part of a company-wide migration to **Node.js** and **MongoDB**.`,
		href: '',
		img: ''
	},
	{
		slug: 'full-stack-developer-2',
		company: 'Zen Studios',
		description:
			'Full stack web development (NodeJS/React + TypeScript) on internal applications. Tool development using Python.',
		contract: ContractType.Hybrid,
		type: 'Software Development',
		location: 'Budapest, Hungary',
		period: { from: new Date(2020, 0, 1), to: new Date(2021, 0, 1) },
		skills: getSkills('nodejs', 'ts', 'js', 'mongodb', 'reactjs', 'redux', 'jenkins', 'svn'),
		name: 'Full Stack Developer',
		color: 'green',
		links: [],
		logo: Assets.NodeJs,
		shortDescription: `Full stack web development (**NodeJS/React** + **TypeScript**) on **internal applications**. Tool development using **Python**.
			<br><br>* Developed internal tools (**Node.js/MongoDB/React** + **TypeScript**) streamlining development processes for game designers and engineers by
			15%. This included archiving tools, configuration file parsers, and a visual coding platform.
			<br>* Built an internal website interfacing with a Postgres database for easier customer complaint and request handling by support teams.
			<br>* Managed CI/CD build pipelines and related scripting (**Jenkins**, **Python**, **Bash**).`,
		href: '',
		img: ''
	},
	{
		slug: 'full-stack-developer-1',
		company: 'DSS Consulting Kft.',
		description:
			'Developed a web application for an automated workbench solution produced by Bosch using Angular + TypeScript and Java (Spring/Java EE).',
		contract: ContractType.OnSite,
		type: 'Software Development',
		location: 'Budapest, Hungary',
		period: { from: new Date(2018, 9, 1), to: new Date(2019, 12, 1) },
		skills: getSkills('java', 'ts', 'js', 'angular', 'ngrx', 'git'),
		name: 'Full Stack Developer',
		color: 'red',
		links: [],
		logo: Assets.Java,
		shortDescription:
			'**Developed a web application for an automated workbench solution** produced by Bosch using **Angular** + **TypeScript** and **Java** (**Spring/Java EE**).',
		href: '',
		img: ''
	},
	{
		slug: 'technical-writer',
		company: 'Semcon',
		description:
			'Produced/edited technical documentation & illustrations for telecommunication software | Collaborated with Finland/Sweden teams | Automated tasks using Python',
		contract: ContractType.OnSite,
		type: 'Technical Writing',
		location: 'Budapest, Hungary',
		period: { from: new Date(2016, 12, 1), to: new Date(2018, 9, 1) },
		skills: getSkills(''),
		name: 'Technical Writer',
		color: 'blue',
		links: [],
		logo: Assets.Writing,
		shortDescription:
			'**Produced/edited technical documentation** & illustrations for telecommunication software | Collaborated with Finland/Sweden teams | Automated tasks using Python',
		href: '',
		img: ''
	},
	{
		slug: 'non-technical-jobs',
		company: 'various',
		description:
			'Volunteer Experience (Germany, 1 year) | English teaching | Call center | Other non-technical roles (Budapest)',
		contract: ContractType.OnSite,
		type: 'Non-technical jobs',
		location: 'Oldenburg, Germany / Budapest, Hungary',
		period: { from: new Date(2010, 0, 1), to: new Date(2016, 12, 1) },
		skills: getSkills(''),
		name: 'Non-technical jobs',
		color: 'red',
		links: [],
		logo: Assets.OddJobs,
		shortDescription:
			'Volunteer Experience (Germany, 1 year) | English teaching | Call center | Other non-technical roles (Budapest)',
		href: '',
		img: ''
	}
];

export const title = 'Experience';
