import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Daniel';

export const lastName = 'Polya';

export const mainTitle = "Hi! I'm Daniel,";

export const description =
	'a seasoned software developer specializing in building dynamic web applications. I have a strong background in technologies ranging from Java to JavaScript, with a current focus on React. Check out my projects and my résumé!';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/violettomania' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/dpolya/'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com/daniel.polya'
	},
	{
		platform: Platform.Email,
		link: 'dpolya.w@gmail.com'
	}
];

export const carrouselSkills = getSkills(
	'reactjs',
	'redux',
	'nodejs',
	'mongodb',
	'js',
	'ts',
	'css',
	'html',
	'sass',
	'mui',
	'docker',
	'jest',
	'figma'
);

export const skills = getSkills(
	'reactjs',
	'redux',
	'js',
	'ts',
	'java',
	'css',
	'html',
	'sass',
	'tailwind',
	'mui',
	'docker',
	'gha',
	'jenkins',
	'rtl',
	'jest',
	'nightwatch',
	'webpack',
	'vite',
	'git',
	'svn',
	'figma'
);
