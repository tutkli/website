import AngularIcon from '~/components/icons/AngularIcon'
import TailwindCSSIcon from '~/components/icons/TailwindCSS'
import SolidJSIcon from '~/components/icons/SolidJSIcon'
import VueJSIcon from '~/components/icons/VueJS'
import PythonIcon from '~/components/icons/PythonIcon'
import NodeJSIcon from '~/components/icons/NodeJSIcon'
import SocketIOIcon from '~/components/icons/SocketIOIcon'
import JiraIcon from '~/components/icons/JiraIcon'
import MongoDBIcon from '~/components/icons/MongoDBIcon'
import { Tool } from '~/models/tool.model'
import RasaIcon from '~/components/icons/RasaIcon'
import JenkinsIcon from '~/components/icons/JenkinsIcon'
import SvelteIcon from '~/components/icons/SvelteIcon'

export const tools: Tool[] = [
	// { name: 'JavaScript', icon: <JavascriptIcon class={'w-10 h-10'}/>, background: 'rgba(247, 223, 30, 0.5)' },
	// { name: 'HTML5', icon: <HTML5Icon class={'w-10 h-10'} />, background: 'rgba(227, 79, 38, 0.5)' },
	// { name: 'CSS3', icon: <CSS3Icon class={'w-10 h-10'} />, background: 'rgba(21, 114, 182, 0.5)' },
	{ name: 'Angular', icon: <AngularIcon class={'w-10 h-10'} />, lightBackground: '#DD0031', darkBackground: '#c70013', url: 'https://angular.io/' },
	{ name: 'TailwindCSS', icon: <TailwindCSSIcon class={'w-10 h-10'} />, lightBackground: '#06B6D4', darkBackground: '#028eb9', url: 'https://tailwindcss.com/' },
	{ name: 'SolidJS', icon: <SolidJSIcon class={'w-10 h-10'} />, lightBackground: '#2C4F7C', darkBackground: '#2C4F7C', url: 'https://www.solidjs.com/' },
	{ name: 'VueJS', icon: <VueJSIcon class={'w-10 h-10'} />, lightBackground: '#269c5d', darkBackground: '#269c5d', url: 'https://vuejs.org/' },
	{ name: 'Python', icon: <PythonIcon class={'w-10 h-10'} />, lightBackground: '#3776AB', darkBackground: '#3776AB', url: 'https://www.python.org/' },
	{ name: 'Svelte', icon: <SvelteIcon class={'w-10 h-10'} />, lightBackground: '#FF3E00', darkBackground: '#FF3E00', url: 'https://svelte.dev/' },
	{ name: 'NodeJS', icon: <NodeJSIcon class={'w-10 h-10'} />, lightBackground: '#339933', darkBackground: '#146b14', url: 'https://nodejs.org/' },
	{ name: 'Jira', icon: <JiraIcon class={'w-10 h-10'} />, lightBackground: '#0052CC', darkBackground: '#0028ad', url: 'https://www.atlassian.com/es/software/jira' },
	{ name: 'MongoDB', icon: <MongoDBIcon class={'w-10 h-10'} />, lightBackground: '#47A248', darkBackground: '#207521', url: 'https://www.mongodb.com/' },
	{ name: 'Rasa', icon: <RasaIcon class={'w-10 h-10'} />, lightBackground: '#5A17EE', darkBackground: '#5A17EE', url: 'https://rasa.com/' },
	{ name: 'Jenkins', icon: <JenkinsIcon class={'w-10 h-10'} />, lightBackground: '#D24939', darkBackground: '#B62117', url: 'https://www.jenkins.io/' },
	{ name: 'Socket.io', icon: <SocketIOIcon class={'w-10 h-10'} />, lightBackground: '#626262', darkBackground: '#343434', url: 'https://socket.io/' },
	// { name: 'Postman', icon: <PostmanIcon class={'w-10 h-10'} />, lightBackground: '#FF6C37', darkBackground: '#ed2f0f', url: 'https://www.postman.com/' },
]
