import { Project } from '~/models/projects.model'
import midnightjp from '/images/projects/midnightjp/midnightjp-890w.webp'
import plastDB from '/images/projects/plast-db/plast-db-890w.webp'
import angularPokedex from '/images/projects/angular-pokedex/angular-pokedex-890w.webp'
import jikanTS from '/images/projects/jikan-ts/jikan-ts-890w.webp'

export const projects: Project[] = [
	{
		name: 'MIDNIGHT.JP',
		url: 'https://www.mdnghtjp.com/',
		imageSrc: midnightjp,
	},
	{
		name: 'Plast-DB',
		url: 'https://github.com/tutkli/plast-db',
		imageSrc: plastDB,
	},
	{
		name: 'Jikan-ts',
		url: 'https://github.com/tutkli/jikan-ts',
		imageSrc: jikanTS,
	},
	{
		name: 'Angular Pokedex',
		url: 'https://github.com/tutkli/angular-pokedex',
		imageSrc: angularPokedex,
	},
]
