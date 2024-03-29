import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

import jobs from '@images/projects/jobs.png';
import webshop from '@images/projects/webshop.png';
import menu from '@images/projects/menu.png';
import cocktails from '@images/projects/cocktails.png';
import colorGenerator from '@images/projects/color-generator.png';
import cart from '@images/projects/cart.png';
import todo from '@images/projects/todo.png';
import tourAgency from '@images/projects/tour-agency.png';
import tours from '@images/projects/tours.png';
import loremIpsum from '@images/projects/lorem-ipsum.png';

export const items: Array<Project> = [
	{
		slug: 'webshop',
		color: '#5e95e3',
		description: 'Home design webshop',
		shortDescription: 'Home design webshop',
		links: [{ to: 'https://github.com/violettomania/webshop', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'Webshop',
		skills: getSkills('reactjs', 'redux', 'ts', 'tailwind'),
		type: 'Frontend App',
		href: 'https://violettomania.github.io/webshop',
		img: webshop
	},
	{
		slug: 'tour-agency',
		color: '#5e95e3',
		description: 'Tour agency',
		shortDescription: 'Tour agency',
		links: [{ to: 'https://github.com/violettomania/find-your-ways', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'Tour agency',
		skills: getSkills('reactjs', 'redux', 'ts'),
		type: 'Frontend App',
		href: 'https://findyourwaydemo.firebaseapp.com/#about',
		img: tourAgency
	},
	{
		slug: 'jobs-tracker',
		color: '#5e95e3',
		description: 'Job tracking app to help you keep track of your job applications',
		shortDescription: 'Job tracking app to help you keep track of your job applications',
		links: [{ to: 'https://github.com/violettomania/jobs', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'Job Tracker',
		skills: getSkills('reactjs', 'redux', 'ts', 'tailwind'),
		type: 'Frontend App',
		href: 'https://violettomania.github.io/jobs',
		img: jobs
	},
	{
		slug: 'menu',
		color: '#5e95e3',
		description: 'Searchable restaurant menu',
		shortDescription: 'Searchable restaurant menu',
		links: [{ to: 'https://github.com/violettomania/menu', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'Searchable restaurant menu',
		skills: getSkills('reactjs', 'redux', 'ts'),
		type: 'Frontend App',
		href: 'https://violettomania.github.io/menu',
		img: menu
	},
	{
		slug: 'cocktails',
		color: '#5e95e3',
		description: 'Cocktail recipes',
		shortDescription: 'Cocktail recipes',
		links: [{ to: 'https://github.com/violettomania/cocktails', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'Cocktail recipes',
		skills: getSkills('reactjs', 'redux', 'ts'),
		type: 'Frontend App',
		href: 'https://violettomania.github.io/cocktails',
		img: cocktails
	},
	{
		slug: 'color-generator',
		color: '#5e95e3',
		description: 'Hex color generator',
		shortDescription: 'Hex color generator',
		links: [{ to: 'https://github.com/violettomania/color-generator', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'Hex color generator',
		skills: getSkills('reactjs', 'ts'),
		type: 'Frontend App',
		href: 'https://violettomania.github.io/color-generator',
		img: colorGenerator
	},
	{
		slug: 'cart',
		color: '#5e95e3',
		description: 'Simple cart',
		shortDescription: 'Simple cart',
		links: [{ to: 'https://github.com/violettomania/cart', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'Simple cart',
		skills: getSkills('reactjs', 'redux', 'ts'),
		type: 'Frontend App',
		href: 'https://violettomania.github.io/cart',
		img: cart
	},
	{
		slug: 'tours',
		color: '#5e95e3',
		description: 'Tours',
		shortDescription: 'Tours',
		links: [{ to: 'https://github.com/violettomania/tours', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'Tours',
		skills: getSkills('reactjs', 'ts'),
		type: 'Frontend App',
		href: 'https://violettomania.github.io/tours',
		img: tours
	},
	{
		slug: 'lorem-ipsum',
		color: '#5e95e3',
		description: 'Lorem ipsum generator',
		shortDescription: 'Lorem ipsum generator',
		links: [{ to: 'https://github.com/violettomania/lorem-ipsum', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'Lorem ipsum generator',
		skills: getSkills('reactjs', 'ts'),
		type: 'Frontend App',
		href: 'https://violettomania.github.io/lorem-ipsum',
		img: loremIpsum
	},
	{
		slug: 'ye-olde-todo-list',
		color: '#5e95e3',
		description: 'Ye Olde To-Do List',
		shortDescription: 'Ye Olde To-Do List',
		links: [{ to: 'https://github.com/violettomania/grocery-bud', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'Ye Olde To-Do List',
		skills: getSkills('reactjs', 'ts'),
		type: 'Frontend App',
		href: 'https://violettomania.github.io/grocery-bud',
		img: todo
	}
];

export const title = 'Projects';
