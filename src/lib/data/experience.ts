import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'frontend-developer-2',
		company: 'Diligent Corporation',
		description:
			'Developing a Google Drive-esque file sharing web application in React + TypeScript.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Budapest, Hungary',
		period: { from: new Date(2022, 2, 1), to: new Date() },
		skills: getSkills('ts', 'js', 'reactjs', 'redux', 'jest', 'nightwatch', 'gha', 'git', 'docker'),
		name: 'Senior Frontend Developer',
		color: 'yellow',
		links: [],
		logo: Assets.ReactJs,
		shortDescription: `Developing **Secure File Sharing**, a Google Drive-like **file sharing web application** focused on security in React + TypeScript.
		<br><br>* Developing and maintaining features used by thousands of users
		<br>* Engineering performance optimizations by refactoring large chunks of the application to React 18, using state of the art libraries like DataGrid
		<br>* Taking key roles in moving to styled components and implementing internal design system
		<br>* Being the driving force behind internal changes in a quickly growing team: introduced Google code review standards, took part in writing the style guide, and pushed numerous initiatives to enhance code quality and work off technical debt
		<br>* Ensuring excellent test coverage by writing unit tests, component tests, and end-to-end tests
		<br>* Maintaining CI/CD pipeline via writing and refactoring build scripts, using GitHub Actions`,

		href: '',
		img: ''
	},
	{
		slug: 'frontend-developer',
		company: 'Budapest Bank / OTP Bank',
		description: 'Front-end development on a netbank application in React + TypeScript.',
		contract: ContractType.Contract,
		type: 'Software Development',
		location: 'Budapest, Hungary',
		period: { from: new Date(2021, 0, 1), to: new Date(2022, 2, 1) },
		skills: getSkills('ts', 'js', 'reactjs', 'redux', 'git'),
		name: 'Frontend Developer',
		color: 'red',
		links: [],
		logo: Assets.ReactJs,
		shortDescription: 'Front-end development on a netbank application in React + TypeScript.',
		href: '',
		img: ''
	},
	{
		slug: 'full-stack-developer-2',
		company: 'Zen Studios',
		description:
			'Full-stack web development (React + TypeScript, Java + Spring) on internal game dev applications | CI/CD: Managing build pipelines & scripting',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Budapest, Hungary',
		period: { from: new Date(2020, 0, 1), to: new Date(2021, 0, 1) },
		skills: getSkills('java', 'ts', 'js', 'reactjs', 'redux', 'jenkins', 'svn'),
		name: 'Full-stack Developer',
		color: 'green',
		links: [],
		logo: Assets.ReactJs,
		shortDescription:
			'Full-stack web development (React + TypeScript, Java + Spring) on internal game dev applications | CI/CD: Managing build pipelines & scripting',
		href: '',
		img: ''
	},
	{
		slug: 'full-stack-developer-1',
		company: 'DSS Consulting Kft.',
		description:
			'Developed a web application for an automated workbench solution produced by Bosch using React + TypeScript and Java (Spring/Java EE).',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Budapest, Hungary',
		period: { from: new Date(2018, 9, 1), to: new Date(2019, 12, 1) },
		skills: getSkills('java', 'ts', 'js', 'angular', 'ngrx', 'git'),
		name: 'Full-stack Developer',
		color: 'red',
		links: [],
		logo: Assets.Java,
		shortDescription:
			'Developed a web application for an automated workbench solution produced by Bosch using React + TypeScript and Java (Spring/Java EE).',
		href: '',
		img: ''
	},
	{
		slug: 'technical-writer',
		company: 'Semcon',
		description:
			'Produced/edited technical documentation & illustrations for telecommunication software | Collaborated with Finland/Sweden teams | Automated tasks using Python',
		contract: ContractType.FullTime,
		type: 'Technical Writing',
		location: 'Budapest, Hungary',
		period: { from: new Date(2016, 12, 1), to: new Date(2018, 9, 1) },
		skills: getSkills(''),
		name: 'Technical Writer',
		color: 'blue',
		links: [],
		logo: Assets.Writing,
		shortDescription:
			'Produced/edited technical documentation & illustrations for telecommunication software | Collaborated with Finland/Sweden teams | Automated tasks using Python',
		href: '',
		img: ''
	},
	{
		slug: 'non-technical-jobs',
		company: 'various',
		description:
			'Volunteer Experience (Germany, 1 year) | English teaching | Call center | Other non-technical roles (Budapest)',
		contract: ContractType.FullTime,
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
