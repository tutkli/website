import tutkli from '/images/tutkli.webp'
import { useI18n } from '@solid-primitives/i18n'
import { A } from 'solid-start'
import GithubIcon from '~/components/icons/GithubIcon'

export default function AboutMe() {
	const [t] = useI18n()
	return (
		<>
			<section class={'flex flex-col justify-center gap-4 text-ebony-900 dark:text-gray-200 md:w-6/12'}>
				<img src={tutkli} alt={'Profile'} class={'animate-fadeIn relative rounded-xl h-28 w-28 md:h-48 md:w-48 shadow-inner'}/>
				<h1 class={'flex flex-row gap-2 wrap text-3xl md:text-4xl font-semibold'}>{t('hello')} <p class={'animate-wave'}>👋</p></h1>
				<p class={'text-base md:text-lg'}>{t('about-me')}</p>
				<h2 class={'text-xl md:text-2xl font-semibold mt-5'}>{t('follow-me')}</h2>
				<A href={'https://github.com/tutkli'} class={'animate-fadeIn w-fit p-2 rounded-lg duration-300 text-gray-200 dark:text-ebony-900 bg-ebony-900 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-400'}>
					<GithubIcon />
				</A>
			</section>
		</>
	)
}
