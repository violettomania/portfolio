<script lang="ts">
	import ProjectCard from '../Card/ProjectCard.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import type { Project } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';

	export let project: Project;
</script>

<ProjectCard {project} color={project.color} href={`${base}/projects/${project.slug}`}>
	<CardDivider />
	<div class="project-img">
		<a href={project.href} target="_blank">
			<img
				title={project.shortDescription}
				src={project.img}
				alt={project.name}
				style="display: block; width: 100%; height: auto; margin: 0 auto;"
			/>
		</a>
	</div>
	<CardDivider />
	<div class="row flex-wrap">
		{#each project.skills as tech}
			<ChipIcon
				logo={getAssetURL(tech.logo)}
				name={tech.name}
				href={`${base}/skills/${tech.slug}`}
			/>
		{/each}
	</div>
</ProjectCard>
