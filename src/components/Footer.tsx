import { useI18n } from '@solid-primitives/i18n'

export default function Footer() {
	const [t] = useI18n()
	return (
		<>
			<div class={'container my-10 p-4 sm:px-8 mx-auto border-solid border-t-2 border-ebony-900 dark:border-gray-200'}>
				<nav class={'flex flex-row text-center justify-center align-middle text-ebony-900 dark:text-gray-200'}>
					{t('copyright')}
				</nav>
			</div>
		</>
	)
}
