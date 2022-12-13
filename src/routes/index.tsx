import { useI18n } from '@solid-primitives/i18n'
import AboutMe from '~/components/AboutMe'
import Tools from '~/components/Tools'
import Projects from '~/components/Projects'
import Footer from '~/components/Footer'

export default function Home() {
	const [t] = useI18n()

  
	return (
		<main class={'container px-4 sm:px-8 mx-auto flex flex-col gap-10'}>
			<header class={'flex flex-col md:flex-row justify-between gap-10'}>
				<AboutMe />
				<Tools />
			</header>
			<Projects />
			<Footer />
		</main>
	)
}
