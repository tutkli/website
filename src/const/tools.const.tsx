import JavascriptIcon from '~/components/icons/JavascriptIcon'
import HTML5Icon from '~/components/icons/Html5Icon'
import CSS3Icon from '~/components/icons/Css3Icon'
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

export const tools: Tool[] = [
	{ name: 'JavaScript', icon: <JavascriptIcon class={'w-10 h-10'}/>, background: 'rgba(247, 223, 30, 0.5)' },
	{ name: 'HTML5', icon: <HTML5Icon class={'w-10 h-10'} />, background: 'rgba(227, 79, 38, 0.5)' },
	{ name: 'CSS3', icon: <CSS3Icon class={'w-10 h-10'} />, background: 'rgba(21, 114, 182, 0.5)' },
	{ name: 'Angular', icon: <AngularIcon class={'w-10 h-10'} />, background: 'rgba(221, 0, 49, 0.5)' },
	{ name: 'TailwindCSS', icon: <TailwindCSSIcon class={'w-10 h-10'} />, background: 'rgba(6, 182, 212, 0.5)' },
	{ name: 'SolidJS', icon: <SolidJSIcon class={'w-10 h-10'} />, background: 'rgba(44, 79, 124, 0.5)' },
	{ name: 'VueJS', icon: <VueJSIcon class={'w-10 h-10'} />, background: 'rgba(66, 211, 146, 0.5)' },
	{ name: 'Python', icon: <PythonIcon class={'w-10 h-10'} />, background: 'rgba(55, 118, 171, 0.5)' },
	{ name: 'NodeJS', icon: <NodeJSIcon class={'w-10 h-10'} />, background: 'rgba(51, 153, 51, 0.5)' },
	{ name: 'Socket.io', icon: <SocketIOIcon class={'w-10 h-10'} />, background: 'rgba(98,98,98,0.5)' },
	{ name: 'Jira', icon: <JiraIcon class={'w-10 h-10'} />, background: 'rgba(0, 82, 204, 0.5)' },
	{ name: 'MongoDB', icon: <MongoDBIcon class={'w-10 h-10'} />, background: 'rgba(71, 162, 72, 0.5)' },
]
